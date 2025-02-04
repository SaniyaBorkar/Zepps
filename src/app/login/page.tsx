"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import supabase from "@/lib/supabase"
import Link from "next/link"

// ✅ Define schema with email, username, and password
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

export default function LoginPage() {

  const router = useRouter()

  const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })
  
  async function onSubmit(values: { email: string; username: string; password: string }) {
    console.log(values) // Debugging

    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password, // ✅ Supabase doesn't accept "username"
    })

    if (error) {
      console.log(error.message);
      form.setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });

      form.setValue("email", ""); 
      form.setValue("password", "");

      return;
    }
    
    if(data){
      console.log("user logged in");
      router.push('/');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-xl font-bold text-center text-gray-800 dark:text-white">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* ✅ Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-gray-800 dark:text-white">Email</FormLabel>
                <FormControl>
                  <Input className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#5f43b2] rounded-md p-2" placeholder="Enter email" {...field} />
                </FormControl>
                {fieldState.error && <FormMessage className="text-red-500">{fieldState.error.message}</FormMessage>}
              </FormItem>
            )}
          />

          {/* ✅ Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-gray-800 dark:text-white">Password</FormLabel>
                <FormControl>
                  <Input className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#5f43b2] rounded-md p-2" type="password" placeholder="Enter password" {...field} />
                </FormControl>
                {fieldState.error && <FormMessage className="text-red-500">{fieldState.error.message}</FormMessage>}
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full py-3 bg-[#5f43b2] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Submit
          </Button>
          
          <div className="text-center">
            <h2 className="text-gray-700 dark:text-gray-400">Don't have an account?</h2>
            <Button asChild>
              <Link href="/register" className="text-[#5f43b2] hover:text-[#5f43b2]/80">Sign Up</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
