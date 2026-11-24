"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import {
  Smartphone,
  Sparkles,
  CheckCircle2,
  Maximize2,
  MousePointerClick,
  Shield,
  Zap,
} from "lucide-react";

export const MobileSpotlight: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <Badge variant="emerald" size="md">
              Mobile-First Reality (Standard T2)
            </Badge>

            <h2 className="font-card-h2 text-ink">
              90%+ of student interactions happen on phones.
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              We engineered OrgKit around the reality of campus life: officers rushing
              between classes, members scanning attendance at noisy auditorium entrances,
              and treasurers approving dues on the commute home.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Maximize2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm sm:text-base">
                    Strict 360px Minimum Viewport Standard
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-muted">
                    Zero horizontal scrolling. Responsive tables gracefully convert to
                    high-density mobile cards on small screens (&le;640px).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MousePointerClick size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm sm:text-base">
                    Thumb-Friendly 44px Touch Targets
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-muted">
                    Every button, input, and list action meets strict touch ergonomics
                    on touch screens, preventing accidental mis-taps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm sm:text-base">
                    Instant 100dvh App-Like Fluidity
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-muted">
                    No native app store downloads required. Works directly in Safari,
                    Chrome, or inside university messaging webviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Smartphone Frame Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[320px] sm:w-[360px] rounded-[44px] bg-ink p-3 shadow-floating-lg ring-1 ring-white/10">
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
              </div>

              {/* Smartphone Inner Screen */}
              <div className="relative rounded-[36px] bg-base overflow-hidden pt-10 pb-6 px-4 text-left border border-zinc-200">
                {/* Mobile Top App Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-xs">
                      CSS
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-ink">CS Society</h4>
                      <p className="text-[10px] text-muted">Admin: Maria S.</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-accent-strong">
                    Live
                  </span>
                </div>

                {/* Mobile Quick Action Pill */}
                <div className="p-3 rounded-2xl bg-white border border-line shadow-sm mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-ink">General Assembly 2026</span>
                    <span className="text-[10px] font-semibold text-accent">Active</span>
                  </div>
                  <p className="text-[11px] text-muted mb-2.5">
                    142/150 checked in • 94.6%
                  </p>
                  <button className="w-full py-2 rounded-xl bg-accent text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]">
                    <Smartphone size={14} /> Open Camera Scanner
                  </button>
                </div>

                {/* Mobile Dues Card */}
                <div className="p-3 rounded-2xl bg-amber-soft/40 border border-amber/30 mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-ink">1st Sem Dues Review</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber text-white">
                      6 Pending
                    </span>
                  </div>
                  <p className="text-[11px] text-muted">
                    ₱42,500 collected • Next: Gabriel M. (₱250)
                  </p>
                </div>

                {/* Mobile Nav Bar */}
                <div className="mt-4 pt-3 border-t border-line flex items-center justify-around text-muted text-[10px]">
                  <span className="font-bold text-accent">Dashboard</span>
                  <span>Roster</span>
                  <span>Events</span>
                  <span>Dues</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
