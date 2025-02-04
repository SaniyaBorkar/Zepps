"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import Navbar from "@/components/ui/navbar";
import Services from "@/components/services";
import { DockDemo } from "@/components/trusted-businesses";
import Pricing from "@/components/pricing";
import { WhyChooseUs } from "@/components/why-choose-us";
import GetInTouch from "@/components/Get-in-touch";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return <>
    <Navbar/>
    <HeroParallax products={products} />
    
    <DockDemo/>
    <Services/>
    <Pricing/>
    <WhyChooseUs/>
    <GetInTouch/>
    <Footer/>
  </>;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
    "/images/nature.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/images/AI-BI.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/planets.jpg",
  },

  {
    title: "Editorially",
    link: "https://earphones.org",
    thumbnail:
      "/images/Data-refined.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://future.ai",
    thumbnail:
      "/images/we-are-one.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.modern-apartments.quest",
    thumbnail:
      "/images/mobile.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/images/future.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/images/mobile.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/camera.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/images/earphones.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/images/earphones.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/images/energy-drink.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/images/planets.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/images/newww.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/images/porsche.jpg",
  },
];
