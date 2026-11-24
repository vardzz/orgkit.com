import React from "react";
import { GeometricDecor } from "@/components/decor/GeometricDecor";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureHighlights } from "@/components/features/FeatureHighlights";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-x-clip selection:bg-accent/20 selection:text-accent-strong">
      {/* Abstract Geometric Vector Decor Background */}
      <GeometricDecor />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar />

      {/* Hero Section with Live Dashboard Mockup */}
      <HeroSection />

      {/* Feature Highlights Bento Spotlight (Member Management & Events) */}
      <FeatureHighlights />
    </main>
  );
}
