"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const PreFooterBanner: React.FC = () => {
  return (
    <section className="w-full py-8 sm:py-12 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-r from-[#EAF5EE] via-[#E7F5ED] to-[#DDF0E5] border border-emerald-100/80 p-6 sm:p-8 lg:px-12 lg:py-7 overflow-hidden shadow-[0_4px_25px_rgba(5,150,105,0.04)]">
          {/* Abstract 3D Wave / Ribbon Curves in Right Corner */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-[180px] sm:w-[240px] md:w-[280px] pointer-events-none select-none overflow-hidden"
          >
            <svg
              viewBox="0 0 280 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover opacity-75"
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

            {/* Center: Headline & Subheadline */}
            <div className="text-center lg:text-center flex-1 max-w-xl">
              <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-zinc-900 tracking-tight leading-snug">
                Ready to bring your organization to the next level?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600 font-normal">
                Join thousands of student leaders using OrgKit today.
              </p>
            </div>

            {/* Right: Primary Call to Action Button */}
            <div className="shrink-0">
              <Link
                href="#signup"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#065F46] hover:bg-[#044E3A] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_14px_rgba(6,95,70,0.25)] hover:shadow-[0_6px_20px_rgba(6,95,70,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Started Free</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
