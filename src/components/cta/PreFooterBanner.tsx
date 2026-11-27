"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Mail } from "lucide-react";

export const PreFooterBanner: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate brief network submission and store in local state/storage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem("orgkit_waitlist") || "[]");
        stored.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem("orgkit_waitlist", JSON.stringify(stored));
      } catch (err) {
        // Fallback gracefully if storage blocked
      }
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full py-8 sm:py-12 bg-white scroll-mt-20" id="cta">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-r from-[#EAF5EE] via-[#E7F5ED] to-[#DDF0E5] border border-emerald-100/80 p-6 sm:p-8 lg:px-10 lg:py-8 overflow-hidden shadow-[0_4px_25px_rgba(5,150,105,0.04)]">
          {/* Abstract 3D Wave / Ribbon Curves in Right Corner */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-[180px] sm:w-[240px] md:w-[280px] pointer-events-none select-none overflow-hidden"
          >
            <svg
              viewBox="0 0 280 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover opacity-60"
              preserveAspectRatio="none"
            >
              <path
                d="M120 0C150 45 200 65 240 40C260 25 270 10 280 0V120H180C140 100 130 60 160 30"
                fill="url(#ribbon-grad-1)"
                fillOpacity="0.45"
              />
              <path
                d="M200 120C190 85 210 50 240 30C260 15 275 20 280 25V120H200Z"
                fill="url(#ribbon-grad-2)"
                fillOpacity="0.6"
              />
              <path
                d="M220 120C210 95 225 65 250 45C265 35 275 40 280 45V120H220Z"
                fill="url(#ribbon-grad-3)"
                fillOpacity="0.5"
              />
              <defs>
                <linearGradient id="ribbon-grad-1" x1="120" y1="0" x2="280" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A7F3D0" />
                  <stop offset="1" stopColor="#6EE7B7" />
                </linearGradient>
                <linearGradient id="ribbon-grad-2" x1="190" y1="30" x2="280" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34D399" />
                  <stop offset="1" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="ribbon-grad-3" x1="210" y1="45" x2="280" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6EE7B7" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left: OrgKit Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <Image
                  src="/orgkit-text-logo.png"
                  alt="OrgKit"
                  width={130}
                  height={36}
                  className="h-8 sm:h-9 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Center: Headline & Subheadline emphasizing v1 limited spots */}
            <div className="text-center lg:text-left flex-1 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-[#065F46] text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Version 1 • Limited Early Access</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-zinc-900 tracking-tight leading-snug">
                Be the first to try OrgKit Version 1.
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 font-normal">
                We&apos;re limiting pilot spots to select student organizations. Enter your Gmail to request early access.
              </p>
            </div>

            {/* Right: Email Collection Input / Form */}
            <div className="shrink-0 w-full sm:w-auto">
              {submitted ? (
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white border border-emerald-200/90 shadow-sm text-xs sm:text-sm text-emerald-900 font-medium animate-fadeIn">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-emerald-950">You&apos;re on the v1 list!</p>
                    <p className="text-[11px] text-emerald-700">We&apos;ll email you when your invite is ready.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 bg-white/95 sm:bg-white rounded-2xl sm:rounded-full p-1.5 sm:pl-3.5 border border-emerald-200/80 shadow-xs focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-600 transition-all w-full sm:w-[380px]"
                >
                  <div className="flex items-center gap-2 px-2 sm:px-0 flex-1">
                    <Mail size={15} className="text-zinc-400 shrink-0 hidden sm:block" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.org@gmail.com"
                      className="w-full bg-transparent py-2 sm:py-1.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl sm:rounded-full bg-[#065F46] hover:bg-[#044E3A] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_14px_rgba(6,95,70,0.25)] hover:shadow-[0_6px_20px_rgba(6,95,70,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 shrink-0"
                  >
                    <span>{loading ? "Submitting..." : "Get Access"}</span>
                    <ArrowRight size={13} className="stroke-[2.5]" />
                  </button>
                </form>
              )}
              <div className="mt-2 text-center sm:text-right">
                <span className="text-[10px] text-zinc-500">
                  Limited slots for student leaders • No fees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
