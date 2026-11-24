"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OrgKitLogo } from "@/components/common/OrgKitLogo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Anti-Fraud QR", href: "#attendance" },
    { label: "Dues Queue", href: "#dues" },
    { label: "Handover Vault", href: "#handover" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-accent">
            <OrgKitLogo size="md" />
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-accent border border-emerald-200/50">
              Campus v2.0
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ink-secondary hover:text-accent rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#demo"
              className="px-3.5 py-2 text-sm font-semibold text-ink-secondary hover:text-ink transition-colors"
            >
              Sign In
            </a>
            <a href="#cta">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight size={16} />}
              >
                Launch Workspace
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a href="#cta">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-ink-secondary hover:text-ink hover:bg-zinc-200/50 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-surface border-b border-line px-4 pt-3 pb-6 shadow-floating animate-card-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-ink hover:text-accent hover:bg-zinc-50 rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-line flex flex-col gap-2.5">
            <a href="#demo" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" fullWidth size="md">
                Sign In
              </Button>
            </a>
            <a href="#cta" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" fullWidth size="md">
                Launch Workspace (Google Auth)
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
