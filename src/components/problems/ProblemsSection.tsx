"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import {
  FileSpreadsheet,
  QrCode,
  Receipt,
  GraduationCap,
  FolderLock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

export const ProblemsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const nightmares = [
    {
      id: "spreadsheet",
      title: "The Lost Spreadsheet",
      persona: "Secretary & Ops Lead",
      chaos: {
        title: "Chaotic Google Sheets with zero consent",
        description:
          "Member lists scattered across 4 different Google accounts, broken formulas, deleted rows, and unverified emails with no privacy disclosure.",
        stat: "12+ hrs lost",
        statLabel: "manually cleaning rosters each term",
      },
      solution: {
        title: "Dynamic Roster & Instant Join Links",
        description:
          "Share a single invite link (`/join/[token]`) or QR code. Members onboard with campus Google Auth and explicit privacy consent.",
        benefits: [
          "Instant CSV import with smart header auto-mapping",
          "One-click roster export with officer role filter",
          "Automated privacy consent records per student",
        ],
      },
      icon: <FileSpreadsheet className="w-5 h-5 text-red-500" />,
      accentColor: "emerald",
    },
    {
      id: "cheaters",
      title: "The Attendance Cheaters",
      persona: "Event Organizer & Logistics Lead",
      chaos: {
        title: "Paper roll calls & texted QR screenshots",
        description:
          "Students take a picture of the projected sign-in code and text it to their absent roommates across campus, making attendance data meaningless.",
        stat: "30-40% proxy",
        statLabel: "fraudulent check-ins at campus events",
      },
      solution: {
        title: "Rotating HMAC Anti-Fraud Dynamic QR",
        description:
          "OrgKit's check-in codes cycle every few seconds with cryptographic validation. A screenshot expires before anyone can message it.",
        benefits: [
          "1-second camera check-in directly in mobile browser",
          "Live real-time attendee counter updates as members enter",
          "Past events historical archive with term filters",
        ],
      },
      icon: <QrCode className="w-5 h-5 text-red-500" />,
      accentColor: "emerald",
    },
    {
      id: "dues",
      title: "The GCash Screenshot Flood",
      persona: "Treasurer & Finance Officer",
      chaos: {
        title: "Scrolling through 200+ chat screenshots",
        description:
          "Officers mix org funds into personal e-wallets, spend weekends cross-referencing reference numbers, and send awkward manual follow-ups.",
        stat: "₱15,000+ lost",
        statLabel: "untracked or unverified dues every semester",
      },
      solution: {
        title: "Dedicated Treasurer Review Queue",
        description:
          "Members submit receipts via `/pay/[token]`. Treasurers review high-res image previews with 1-click Approve, Reject, or Undo.",
        benefits: [
          "Real-time visual progress ring showing collection %",
          "One-click batch email reminders sent to unpaid members",
          "Permanent tamper-proof finance audit trail",
        ],
      },
      icon: <Receipt className="w-5 h-5 text-amber-500" />,
      accentColor: "amber",
    },
    {
      id: "wipeout",
      title: "The Annual Knowledge Wipeout",
      persona: "President & Vice President",
      chaos: {
        title: "Graduating seniors walk away with everything",
        description:
          "Every election cycle, outgoing officers take supplier contacts, permit templates, and advice with them. Incoming officers start from zero.",
        stat: "100% reset",
        statLabel: "every time the executive board turns over",
      },
      solution: {
        title: "Structured Handover Guides & Vault",
        description:
          "Autosaved handover templates covering responsibilities, recurring cadences, supplier contacts, and watch-outs, locked upon transition.",
        benefits: [
          "Atomic Admin Rights Transfer with typed confirmation",
          "Archive of historical officer terms and achievements",
          "Uncompromised 'at least one active admin' invariant",
        ],
      },
      icon: <GraduationCap className="w-5 h-5 text-red-500" />,
      accentColor: "emerald",
    },
    {
      id: "scattered",
      title: "Scattered Important Files",
      persona: "Entire Leadership Team",
      chaos: {
        title: "Permits & constitutions lost in personal drives",
        description:
          "University accreditation documents, event permits, and past bylaws buried in graduating members' private folders that get deleted.",
        stat: "Weeks lost",
        statLabel: "waiting for university re-accreditation files",
      },
      solution: {
        title: "Categorized Organization Repository",
        description:
          "Keep constitutions, permits, supplier agreements, and meeting minutes neatly categorized into Finance, Legal, Templates, and General.",
        benefits: [
          "Role-restricted access (Admin vs Finance vs Officer)",
          "Direct integration into officer handover transition guides",
          "Permanent institutional memory for campus clubs",
        ],
      },
      icon: <FolderLock className="w-5 h-5 text-red-500" />,
      accentColor: "emerald",
    },
  ];

  const current = nightmares[activeTab];

  return (
    <section id="features" className="py-16 md:py-24 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="amber" size="md" className="mb-4">
            The 5 Campus Nightmares OrgKit Solves
          </Badge>
          <h2 className="font-card-h2 text-ink mb-4">
            Student organizations shouldn't run on chaos.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Every semester, newly elected student leaders face the same operational
            headaches. Here is how OrgKit turns operational pain into structured bliss.
          </p>
        </div>

        {/* Tab Navigation for 5 Nightmares */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {nightmares.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
                activeTab === idx
                  ? "bg-ink text-white shadow-sm"
                  : "bg-zinc-100 text-ink-secondary hover:bg-zinc-200/70"
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Comparison Grid (Chaos vs Solution) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Legacy The Old Way (Left Column: 5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-red-50/40 border border-red-200/70 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                  <XCircle size={14} />
                  The Old Painful Way
                </span>
                <span className="text-xs font-semibold text-muted">
                  {current.persona}
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink mb-3">{current.chaos.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                {current.chaos.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 border border-red-100 shadow-sm mt-4">
              <span className="text-2xl font-extrabold text-red-600 block mb-0.5">
                {current.chaos.stat}
              </span>
              <span className="text-xs font-medium text-muted">
                {current.chaos.statLabel}
              </span>
            </div>
          </div>

          {/* OrgKit The Modern Way (Right Column: 7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-emerald-50/50 via-surface to-surface border border-accent/30 p-6 sm:p-8 shadow-floating flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-accent-strong">
                  <CheckCircle2 size={14} />
                  The OrgKit Solution
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  <Sparkles size={13} />
                  Instant Automation
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-brand-deep mb-3">
                {current.solution.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                {current.solution.description}
              </p>

              {/* Bulleted Solution Features */}
              <div className="space-y-3 mb-6">
                {current.solution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-ink">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Accent Note */}
            <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs">
              <span className="font-semibold text-accent">
                Zero training required • Ready in under 3 minutes
              </span>
              <a
                href="#interactive-demos"
                className="inline-flex items-center gap-1 font-bold text-accent hover:text-accent-strong group"
              >
                Try this feature
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
