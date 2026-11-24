"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#interactive-demos" },
    { label: "Privacy", href: "#security" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Left: Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop Left: Features | How it works | Privacy */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {leftNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center Logo: Mark only (orgkit-logo.png) */}
          <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 items-center justify-center">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-accent"
              aria-label="OrgKit Home"
            >
              <Image
                src="/orgkit-logo.png"
                alt="OrgKit Logo"
                width={48}
                height={32}
                priority
                className="h-8 sm:h-9 w-auto object-contain transition-transform hover:scale-105 active:scale-95"
              />
            </Link>
          </div>

          {/* Desktop Right: Sign in | Get started (Button) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#cta"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Sign in
            </a>

            <a href="#cta">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-strong text-white text-sm font-medium transition-all shadow-button hover:shadow-button-hover active:scale-[0.99] select-none btn-lift group">
                <span>Get started</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="shrink-0 transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </a>
          </div>

          {/* Mobile Right: Quick Action Button */}
          <div className="flex md:hidden items-center">
            <a href="#cta">
              <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-white text-xs font-medium shadow-button">
                <span>Get started</span>
                <ArrowRight size={13} strokeWidth={2} className="shrink-0" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-5 pt-3 pb-6 shadow-floating animate-card-fade-in">
          <div className="flex flex-col gap-1">
            {leftNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-medium text-zinc-800 hover:text-accent hover:bg-zinc-50 rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-200 flex flex-col gap-2.5">
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 rounded-full border border-zinc-200 min-h-[44px] flex items-center justify-center"
            >
              Sign in
            </a>
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <button className="w-full py-2.5 rounded-full bg-accent hover:bg-accent-strong text-white text-sm font-medium transition-all shadow-button flex items-center justify-center gap-2 min-h-[44px]">
                <span>Get started</span>
                <ArrowRight size={15} strokeWidth={2} className="shrink-0" />
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
