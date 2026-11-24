import React from "react";
import { GeometricDecor } from "@/components/decor/GeometricDecor";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureHighlights } from "@/components/features/FeatureHighlights";
import { PreFooterBanner } from "@/components/cta/PreFooterBanner";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-x-clip selection:bg-accent/20 selection:text-accent-strong">
      {/* Abstract Geometric Vector Decor Background */}
      <GeometricDecor />

      {/* Hero Section with Live Dashboard Mockup */}
      <HeroSection />

      {/* Feature Highlights Bento Spotlight (Member Management & Events) */}
      <FeatureHighlights />

      {/* Standalone Pre-Footer Action Banner */}
      <PreFooterBanner />
    </main>
  );
}
