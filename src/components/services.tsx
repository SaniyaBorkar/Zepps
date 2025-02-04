import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function Services() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 gap-12 mb-20">
        <div>
          <h4 className='font-semibold md:text-3xl text-primary/80 font-medium'>SERVICES</h4>
          <h1 className="text-2xl md:text-5xl font-bold mt-2 gradient-text text-[#5f43b2]">Exceeding Expectations</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Our expert team blends innovation and technology to build fast, secure, and scalable digital experiences.
          </p>
        </div>
        <div>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>

  )
}

export const projects = [
    {
      title: "Custom Website Development",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "/",
    },
    {
      title: "Web Application Development",
      description:
        "We create user-friendly, scalable websites and web applications tailored to your needs, ensuring top-notch performance.",
      link: "/",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Build secure, seamless e-commerce platforms with easy payment integration and efficient product management.",
      link: "/",
    },
    {
      title: "SEO Optimization",
      description:
        "We optimize your website’s structure and content to improve search rankings and increase visibility.",
      link: "/",
    },
    {
      title: "Digital Marketing Solutions",
      description:
        "Boost your brand with PPC advertising, email marketing, and social media management to reach the right audience.",
      link: "/",
    },
    {
      title: "Web Hosting & Domain Management",
      description:
        "Reliable, secure web hosting and domain services to ensure your site runs smoothly and stays accessible.",
      link: "/",
    },
  ];

export default Services;