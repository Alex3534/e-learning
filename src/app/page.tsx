import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "horizon écrits - acceuil",
  description: "Bienvenue sur Horizon Écrits, votre espace dédié à la rédaction. Découvrez des articles captivants sur le e-commerce, la rédaction web et bien plus encore.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      <Testimonial />
      <Newsletter />
    </main>
  );
}