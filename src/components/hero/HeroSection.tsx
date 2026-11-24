"use client";

import React from "react";
import {
  ArrowRight,
  Calendar,
  Users,
  Check,
  Clock,
  ShieldCheck,
  QrCode,
  Wallet,
  CheckCircle2,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Floating Decorative Indicators with Curved Hairlines (from reference design) */}
        <div
          className="absolute inset-0 pointer-events-none select-none hidden lg:block -z-10"
          aria-hidden="true"
        >
          {/* Left: Floating Calendar Card + Curved Hairline */}
          <div className="absolute top-[26%] left-6 xl:left-14 animate-pulse-slow" style={{ animationDuration: "6s" }}>
            <div className="relative">
              {/* Curved SVG Hairline */}
              <svg
                className="absolute -top-10 -right-16 w-28 h-28 text-zinc-300 -z-10"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10 80 C 25 30, 65 25, 90 60"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200/90 shadow-md flex items-center justify-center">
                <Calendar size={20} className="text-[#059669]" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Top-Right: Floating Users Card + Curved Hairline */}
          <div className="absolute top-[8%] right-10 xl:right-20 animate-pulse-slow" style={{ animationDuration: "7s" }}>
            <div className="relative">
              {/* Curved SVG Hairline */}
              <svg
                className="absolute -top-8 -left-20 w-32 h-32 text-zinc-300 -z-10"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M90 65 C 65 15, 25 35, 10 85"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200/90 shadow-md flex items-center justify-center">
                <Users size={20} className="text-[#059669]" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Mid-Right: Floating Check Card + Curved Hairline */}
          <div className="absolute top-[48%] right-6 xl:right-16 animate-pulse-slow" style={{ animationDuration: "8s" }}>
            <div className="relative">
              {/* Curved SVG Hairline */}
              <svg
                className="absolute -top-10 -left-16 w-28 h-28 text-zinc-300 -z-10"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10 25 C 40 55, 65 65, 90 35"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200/90 shadow-md flex items-center justify-center">
                <Check size={19} className="text-[#059669]" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>

        {/* 1. Top Badge / Pill: • THE WORKSPACE FOR STUDENT ORGANIZATIONS */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] mb-7 animate-card-fade-in shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#065F46]">
            THE WORKSPACE FOR STUDENT ORGANIZATIONS
          </span>
        </div>

        {/* 2. Headline: A better way to run your student org. */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111827] tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
          A better way to run <br className="hidden sm:inline" />
          your{" "}
          <span className="inline-block px-3.5 py-0.5 rounded-2xl bg-[#D1FAE5]/80 text-[#047857] shadow-xs">
            student org.
          </span>
        </h1>

        {/* 3. Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Members, events, dues, and everything your team needs. All in one place.
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-16">
          <a href="#cta" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#043f30] text-white text-sm sm:text-base font-semibold transition-all shadow-button hover:shadow-button-hover active:scale-[0.99] select-none btn-lift group">
              <span>Get started free</span>
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </a>

          <a href="#interactive-demos" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 text-sm sm:text-base font-medium border border-zinc-200/90 shadow-xs hover:border-zinc-300 transition-all active:scale-[0.99] select-none btn-lift">
              Explore the workspace
            </button>
          </a>
        </div>

        {/* 5. Central Floating Dashboard Card Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-surface rounded-3xl border border-line shadow-floating p-4 sm:p-6 md:p-8 text-left transition-all hover:border-zinc-300">
            {/* Header of mock card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-line">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-accent text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  CSS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-ink">
                      Computer Science Society
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-accent border border-emerald-200">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-muted">
                    Term: 1st Sem A.Y. 2026-2027 • Admin: Maria Santos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-100 text-xs font-semibold text-ink-secondary">
                  <Clock size={14} className="text-muted" />
                  3-Min Quick Setup
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-accent/10 text-accent text-xs font-semibold">
                  <ShieldCheck size={14} />
                  RBAC Enabled
                </span>
              </div>
            </div>

            {/* 3 Core Metric Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {/* Metric 1: Member Roster */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-line/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted flex items-center gap-1.5">
                    <Users size={15} className="text-accent" />
                    Member Roster
                  </span>
                  <span className="text-[11px] font-semibold text-accent">
                    +24 this week
                  </span>
                </div>
                <div className="text-2xl font-bold text-ink mb-1">348 Members</div>
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  100% consent signed via /join link
                </div>
              </div>

              {/* Metric 2: Live Event QR */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-accent-strong flex items-center gap-1.5">
                    <QrCode size={15} className="text-accent" />
                    Live Event QR
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent text-white animate-pulse">
                    Rotating Live
                  </span>
                </div>
                <div className="text-2xl font-bold text-brand-deep mb-1">
                  142 / 150 <span className="text-sm font-medium text-accent">(94.6%)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-accent-strong">
                  <CheckCircle2 size={13} />
                  Anti-fraud code refreshes in 4s
                </div>
              </div>

              {/* Metric 3: Dues Review Queue */}
              <div className="p-4 rounded-2xl bg-amber-soft/40 border border-amber/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-amber-strong flex items-center gap-1.5">
                    <Wallet size={15} className="text-amber" />
                    Semester Dues
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber text-white">
                    6 Pending
                  </span>
                </div>
                <div className="text-2xl font-bold text-ink mb-1">
                  ₱42,500 <span className="text-sm font-medium text-muted">/ ₱48,000</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-strong">
                  <Clock size={13} />
                  88% collected • 1-click reminders
                </div>
              </div>
            </div>

            {/* Quick Action Ribbon */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-ink-muted font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Demo Sync: All operations verified
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-ink-secondary font-medium">
                  Instant CSV Import
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-zinc-100 text-ink-secondary font-medium">
                  Handover Guide Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
