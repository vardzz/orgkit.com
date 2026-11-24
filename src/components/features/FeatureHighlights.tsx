"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Copy,
  Check,
  CheckCircle2,
  Users,
} from "lucide-react";

export const FeatureHighlights: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard?.writeText("https://orgkit.app/join");
    setTimeout(() => setCopied(false), 2000);
  };

  const members = [
    { name: "Andrea Santos", role: "Member", bg: "bg-emerald-100 text-emerald-800" },
    { name: "Daniel Reyes", role: "Member", bg: "bg-amber-100 text-amber-800" },
    { name: "Maria Lopez", role: "Member", bg: "bg-zinc-100 text-zinc-800" },
    { name: "Jericho Verde", role: "Member", bg: "bg-emerald-100 text-emerald-800" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Member Management */}
          <div className="rounded-[36px] bg-[#F8F9FA] border border-zinc-200/60 p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-300 transition-all duration-300 shadow-xs">
            {/* Playful green spark marks in corner */}
            <div className="absolute top-8 right-1/2 translate-x-12 sm:translate-x-16 pointer-events-none select-none text-emerald-600/70">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="2" y1="12" x2="6" y2="12" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="md:col-span-6 space-y-4 text-left z-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#065F46] text-xs font-semibold tracking-wider uppercase">
                  MEMBER MANAGEMENT
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
                  Keep your <br />
                  people in sync.
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  Manage your roster, invite new members, and organize your team with ease.
                </p>

                <div className="pt-2">
                  <Link
                    href="#features"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-800 hover:text-emerald-700 transition-colors group/link"
                  >
                    <span>See more features</span>
                    <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1 text-zinc-500 group-hover/link:text-emerald-700" />
                  </Link>
                </div>
              </div>

              {/* Right Floating Card Mockup */}
              <div className="md:col-span-6 flex justify-center md:justify-end relative">
                <div className="w-[270px] sm:w-[290px] rounded-3xl bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(24,24,27,0.08)] p-5 text-left transform md:-rotate-2 transition-transform duration-300 group-hover:rotate-0">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-zinc-900">Members</h4>
                    <span className="text-[10px] text-zinc-400 font-medium">348 Total</span>
                  </div>

                  {/* Search input mock */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/60 text-xs text-zinc-400 mb-4">
                    <Search size={13} className="text-zinc-400 shrink-0" />
                    <span className="text-[11px]">Search members...</span>
                  </div>

                  {/* Member Rows */}
                  <div className="space-y-3">
                    {members.map((m, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${m.bg}`}>
                          {m.name.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-zinc-900 truncate">{m.name}</p>
                          <p className="text-[10px] text-zinc-400">{m.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Join Link Pill */}
                  <div
                    onClick={handleCopy}
                    className="mt-4 -mb-2 -mr-3 ml-auto w-fit flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 shadow-md text-[11px] font-mono text-zinc-700 cursor-pointer hover:border-emerald-300 transition-all select-none"
                    title="Click to copy invite link"
                  >
                    <span>https://orgkit.app/join</span>
                    {copied ? (
                      <Check size={13} className="text-emerald-600" />
                    ) : (
                      <Copy size={13} className="text-zinc-400" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Events & Attendance */}
          <div className="rounded-[36px] bg-[#F8F9FA] border border-zinc-200/60 p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-300 transition-all duration-300 shadow-xs">
            {/* Playful green spark marks in corner */}
            <div className="absolute top-8 right-12 pointer-events-none select-none text-emerald-600/70">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="19.07" y1="4.93" x2="16.24" y2="7.76" />
                <line x1="22" y1="12" x2="18" y2="12" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="md:col-span-6 space-y-4 text-left z-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#065F46] text-xs font-semibold tracking-wider uppercase">
                  EVENTS &amp; ATTENDANCE
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
                  Every event, <br />
                  accounted for.
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  Create events, track attendance, and keep your community engaged.
                </p>

                <div className="pt-2">
                  <Link
                    href="#attendance"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-800 hover:text-emerald-700 transition-colors group/link"
                  >
                    <span>See more features</span>
                    <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1 text-zinc-500 group-hover/link:text-emerald-700" />
                  </Link>
                </div>
              </div>

              {/* Right Floating QR Card Mockup */}
              <div className="md:col-span-6 flex justify-center md:justify-end relative">
                <div className="w-[230px] sm:w-[250px] rounded-3xl bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(24,24,27,0.08)] p-6 text-center transform md:rotate-3 transition-transform duration-300 group-hover:rotate-0">
                  <h4 className="text-sm font-bold text-zinc-900 mb-4">Check-in</h4>

                  {/* QR Code Graphic */}
                  <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center mb-4">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-28 h-28 text-zinc-900"
                    >
                      {/* Corner Position Boxes */}
                      <rect x="5" y="5" width="26" height="26" rx="4" fill="currentColor" />
                      <rect x="10" y="10" width="16" height="16" rx="2" fill="white" />
                      <rect x="14" y="14" width="8" height="8" rx="1" fill="currentColor" />

                      <rect x="69" y="5" width="26" height="26" rx="4" fill="currentColor" />
                      <rect x="74" y="10" width="16" height="16" rx="2" fill="white" />
                      <rect x="78" y="14" width="8" height="8" rx="1" fill="currentColor" />

                      <rect x="5" y="69" width="26" height="26" rx="4" fill="currentColor" />
                      <rect x="10" y="74" width="16" height="16" rx="2" fill="white" />
                      <rect x="14" y="78" width="8" height="8" rx="1" fill="currentColor" />

                      {/* Dynamic pattern dots */}
                      <rect x="38" y="8" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="52" y="8" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="38" y="22" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="46" y="38" width="8" height="8" rx="1" fill="#059669" />
                      <rect x="60" y="44" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="12" y="45" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="25" y="45" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="38" y="60" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="52" y="60" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="70" y="45" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="84" y="45" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="38" y="78" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="52" y="78" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="70" y="78" width="6" height="6" rx="1" fill="currentColor" />
                      <rect x="84" y="78" width="6" height="6" rx="1" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Green Checkmark */}
                  <div className="flex items-center justify-center gap-1.5 text-emerald-700">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                    <span className="text-xs font-bold">Scan to check in</span>
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

