import React from "react";
import { GeometricDecor } from "@/components/decor/GeometricDecor";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureHighlights } from "@/components/features/FeatureHighlights";
import { ProblemsSection } from "@/components/problems/ProblemsSection";
import { FeatureShowcase } from "@/components/features/FeatureShowcase";
import { InteractiveDemos } from "@/components/interactive/InteractiveDemos";
import { MobileSpotlight } from "@/components/mobile/MobileSpotlight";
import { SecuritySection } from "@/components/security/SecuritySection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { CTASection } from "@/components/cta/CTASection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-base text-ink overflow-x-clip selection:bg-accent/20 selection:text-accent-strong">
      {/* Abstract Geometric Vector Decor Background */}
      <GeometricDecor />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar />

      {/* Hero Section with Live Dashboard Mockup */}
      <HeroSection />

      {/* Feature Highlights Bento Spotlight (Member Management & Events) */}
      <FeatureHighlights />

      {/* The 5 Campus Nightmares OrgKit Solves */}
      <ProblemsSection />

      {/* 4 Flagship Operational Pillars */}
      <FeatureShowcase />

      {/* Live Interactive Product Sandbox (QR, Dues, Roster, Handover) */}
      <InteractiveDemos />

      {/* Mobile-First Reality (360px & 44px Touch Targets) */}
      <MobileSpotlight />

      {/* Security, RBAC & Privacy Guarantee */}
      <SecuritySection />

      {/* Social Proof & Campus Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* High-Converting Bottom CTA Banner */}
      <CTASection />

      {/* Comprehensive Polished Footer */}
      <Footer />
    </main>
  );
}
