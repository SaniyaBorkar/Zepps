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
import { products } from "@/constants/products";

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
};