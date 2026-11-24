"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FloatingIconsDecor } from "@/components/decor/FloatingIconsDecor";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  QrCode,
  Wallet,
  Clock,
  ArrowUpRight,
  FileCheck,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 mb-6 animate-card-fade-in">
          <Badge
            variant="emerald"
            size="md"
            icon={<Sparkles size={14} className="text-accent" />}
            className="shadow-sm"
          >
            The Operating System for Campus Organizations
          </Badge>
        </div>

        {/* Display H1 */}
        <h1 className="font-display-h1 text-ink max-w-4xl mx-auto tracking-tight mb-6">
          Organize. Collaborate. <span className="text-accent">Lead.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-hero-sub max-w-2xl mx-auto mb-9 text-base sm:text-lg md:text-xl text-muted">
          Stop running your student organization on chaotic spreadsheets, scattered
          GCash receipts, and paper sign-in sheets. OrgKit gives student leaders a
          unified, beautifully branded digital headquarters.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12">
          {/* Google Auth Button Spec */}
          <a href="#cta" className="w-full sm:w-auto">
            <Button
              variant="google"
              size="lg"
              fullWidth
              className="gap-3 text-ink font-semibold border-line hover:border-zinc-300"
              icon={
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              }
            >
              Launch Your Org Workspace
            </Button>
          </a>

          <a href="#interactive-demos" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              className="bg-surface/80 border-line hover:bg-surface text-ink-secondary hover:text-ink font-semibold"
            >
              Try Interactive Demos
            </Button>
          </a>
        </div>

        {/* Social Proof & Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-ink-muted mb-16">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-accent" />
            3-Minute Setup
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-accent" />
            100% Mobile Ready (360px+)
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-accent" />
            Zero Spreadsheet Chaos
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-accent" />
            Google OAuth &amp; RBAC
          </span>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <div className="relative max-w-5xl mx-auto">
          {/* Six tilted floating micro-cards around mockup */}
          <FloatingIconsDecor />

          {/* Central Floating Dashboard Card */}
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
