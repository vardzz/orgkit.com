"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Copy,
  Check,
} from "lucide-react";

export const FeatureHighlights: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("https://orgkit.app/join");
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const members = [
    {
      name: "Andrea Santos",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      initials: "AS",
      bg: "bg-emerald-100 text-emerald-800",
    },
    {
      name: "Daniel Reyes",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      initials: "DR",
      bg: "bg-blue-100 text-blue-800",
    },
    {
      name: "Maria Lopez",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      initials: "ML",
      bg: "bg-purple-100 text-purple-800",
    },
    {
      name: "Jericho Verde",
      role: "Member",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      initials: "JV",
      bg: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 pb-24 sm:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Member Management */}
          <div className="relative rounded-[32px] bg-[#F9FAFB] border border-zinc-200/70 p-7 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:border-zinc-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Copy */}
              <div className="md:col-span-6 space-y-4 text-left z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF7EE] text-[#166534] text-[11px] font-semibold tracking-wider uppercase">
                  MEMBER MANAGEMENT
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
                  Keep your <br />
                  people in sync.
                </h3>

                <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                  Manage your roster, invite new members, and organize your team with ease.
                </p>

                <div className="pt-2">
                  <Link
                    href="#features"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-emerald-700 transition-colors group/link"
                  >
                    <span>See more features</span>
                    <ArrowRight size={15} className="text-zinc-600 transition-transform group-hover/link:translate-x-1 group-hover/link:text-emerald-700" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Floating Members Mockup Card */}
              <div className="md:col-span-6 flex justify-center md:justify-end relative">
                {/* Green playful doodle lines above top-left of the phone card */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 left-6 md:-left-2 text-emerald-500 pointer-events-none select-none z-20"
                >
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <line x1="8" y1="26" x2="2" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="12" y1="18" x2="4" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="20" y1="14" x2="16" y2="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* White Mockup Card */}
                <div className="relative w-full max-w-[270px] sm:max-w-[285px] rounded-[24px] bg-white border border-zinc-200/90 shadow-[0_16px_45px_rgba(24,24,27,0.07)] p-5 text-left transform md:-rotate-1 transition-transform duration-300 hover:rotate-0">
                  <div className="mb-3.5">
                    <h4 className="text-[15px] font-bold text-zinc-900 tracking-tight">Members</h4>
                  </div>

                  {/* Search Bar Input */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F6F7F9] border border-zinc-200/60 text-xs text-zinc-400 mb-4">
                    <Search size={13} className="text-zinc-400 shrink-0" />
                    <span className="text-[11px] text-zinc-400">Search members...</span>
                  </div>

                  {/* Member List */}
                  <div className="space-y-3">
                    {members.map((member, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-zinc-200/60">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = "none";
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          <div
                            style={{ display: "none" }}
                            className={`w-full h-full items-center justify-center font-bold text-[9px] ${member.bg}`}
                          >
                            {member.initials}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-semibold text-zinc-900 leading-tight truncate">
                            {member.name}
                          </p>
                          <p className="text-[10px] text-zinc-400 leading-tight">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Join Link Pill overlapping bottom-right */}
                  <div className="relative mt-4 pt-1 flex justify-end">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/90 shadow-[0_6px_20px_rgba(0,0,0,0.09)] text-[11px] text-zinc-700 hover:border-emerald-300 hover:text-emerald-700 transition-all active:scale-95"
                      title="Copy join link"
                    >
                      <span className="font-medium tracking-tight">https://orgkit.app/join</span>
                      {copied ? (
                        <Check size={12} className="text-emerald-600 stroke-[2.5]" />
                      ) : (
                        <Copy size={12} className="text-zinc-400 group-hover:text-emerald-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Events & Attendance */}
          <div className="relative rounded-[32px] bg-[#F9FAFB] border border-zinc-200/70 p-7 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:border-zinc-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Copy */}
              <div className="md:col-span-6 space-y-4 text-left z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF7EE] text-[#166534] text-[11px] font-semibold tracking-wider uppercase">
                  EVENTS &amp; ATTENDANCE
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
                  Every event, <br />
                  accounted for.
                </h3>

                <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                  Create events, track attendance, and keep your community engaged.
                </p>

                <div className="pt-2">
                  <Link
                    href="#attendance"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-emerald-700 transition-colors group/link"
                  >
                    <span>See more features</span>
                    <ArrowRight size={15} className="text-zinc-600 transition-transform group-hover/link:translate-x-1 group-hover/link:text-emerald-700" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Floating QR Check-in Mockup Card */}
              <div className="md:col-span-6 flex justify-center md:justify-end relative">
                {/* Green playful doodle lines above top-right of the QR card */}
                <div
                  aria-hidden="true"
                  className="absolute -top-5 right-4 sm:right-6 md:right-1 text-emerald-500 pointer-events-none select-none z-20"
                >
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <line x1="14" y1="16" x2="18" y2="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="22" y1="20" x2="30" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="24" y1="26" x2="32" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* White Mockup Card (tilted ~3 degrees clockwise) */}
                <div className="relative w-full max-w-[220px] sm:max-w-[235px] rounded-[24px] bg-white border border-zinc-200/90 shadow-[0_16px_45px_rgba(24,24,27,0.07)] p-5 text-center transform md:rotate-[3deg] transition-transform duration-300 hover:rotate-0">
                  <div className="text-left mb-3">
                    <h4 className="text-[14px] font-bold text-zinc-900 tracking-tight">Check-in</h4>
                  </div>

                  {/* QR Code Graphic Mockup */}
                  <div className="p-3 bg-white rounded-2xl border border-zinc-100/90 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-center mb-4">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-28 h-28 text-zinc-900"
                      fill="currentColor"
                    >
                      {/* Top-Left Finder */}
                      <rect x="6" y="6" width="26" height="26" rx="4" />
                      <rect x="11" y="11" width="16" height="16" rx="2" fill="white" />
                      <rect x="15" y="15" width="8" height="8" rx="1" />

                      {/* Top-Right Finder */}
                      <rect x="68" y="6" width="26" height="26" rx="4" />
                      <rect x="73" y="11" width="16" height="16" rx="2" fill="white" />
                      <rect x="77" y="15" width="8" height="8" rx="1" />

                      {/* Bottom-Left Finder */}
                      <rect x="6" y="68" width="26" height="26" rx="4" />
                      <rect x="11" y="73" width="16" height="16" rx="2" fill="white" />
                      <rect x="15" y="77" width="8" height="8" rx="1" />

                      {/* Dense Module Pattern Matrix */}
                      <rect x="37" y="8" width="5" height="5" rx="1" />
                      <rect x="47" y="8" width="5" height="5" rx="1" />
                      <rect x="57" y="8" width="5" height="5" rx="1" />
                      <rect x="37" y="18" width="5" height="5" rx="1" />
                      <rect x="47" y="18" width="5" height="5" rx="1" />
                      <rect x="57" y="18" width="5" height="5" rx="1" />
                      <rect x="37" y="28" width="5" height="5" rx="1" />

                      <rect x="8" y="37" width="5" height="5" rx="1" />
                      <rect x="18" y="37" width="5" height="5" rx="1" />
                      <rect x="28" y="37" width="5" height="5" rx="1" />
                      <rect x="47" y="37" width="6" height="6" rx="1" />
                      <rect x="68" y="37" width="5" height="5" rx="1" />
                      <rect x="78" y="37" width="5" height="5" rx="1" />
                      <rect x="88" y="37" width="5" height="5" rx="1" />

                      <rect x="8" y="47" width="5" height="5" rx="1" />
                      <rect x="23" y="47" width="5" height="5" rx="1" />
                      <rect x="37" y="47" width="5" height="5" rx="1" />
                      <rect x="57" y="47" width="5" height="5" rx="1" />
                      <rect x="73" y="47" width="5" height="5" rx="1" />
                      <rect x="88" y="47" width="5" height="5" rx="1" />

                      <rect x="8" y="57" width="5" height="5" rx="1" />
                      <rect x="23" y="57" width="5" height="5" rx="1" />
                      <rect x="37" y="57" width="5" height="5" rx="1" />
                      <rect x="47" y="57" width="5" height="5" rx="1" />
                      <rect x="63" y="57" width="5" height="5" rx="1" />
                      <rect x="78" y="57" width="5" height="5" rx="1" />
                      <rect x="88" y="57" width="5" height="5" rx="1" />

                      <rect x="37" y="68" width="5" height="5" rx="1" />
                      <rect x="47" y="68" width="5" height="5" rx="1" />
                      <rect x="57" y="68" width="5" height="5" rx="1" />
                      <rect x="73" y="68" width="5" height="5" rx="1" />
                      <rect x="83" y="68" width="5" height="5" rx="1" />

                      <rect x="37" y="78" width="5" height="5" rx="1" />
                      <rect x="47" y="78" width="5" height="5" rx="1" />
                      <rect x="63" y="78" width="5" height="5" rx="1" />
                      <rect x="78" y="78" width="5" height="5" rx="1" />

                      <rect x="37" y="88" width="5" height="5" rx="1" />
                      <rect x="52" y="88" width="5" height="5" rx="1" />
                      <rect x="68" y="88" width="5" height="5" rx="1" />
                      <rect x="83" y="88" width="5" height="5" rx="1" />
                    </svg>
                  </div>

                  {/* Scan to Check-in with Green Checkmark */}
                  <div className="flex flex-col items-center justify-center gap-1.5 pt-1">
                    <div className="text-emerald-600 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[12px] font-bold text-zinc-800 tracking-tight">
                      Scan to check in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
