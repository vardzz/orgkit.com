"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  Lock,
  Unlock,
  CheckCircle2,
  Calendar,
  Contact,
  AlertTriangle,
  FolderOpen,
  KeyRound,
} from "lucide-react";

export const HandoverGuidePreview: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "1. What I Do (Role Overview)",
      icon: <BookOpen size={16} className="text-accent" />,
      content:
        "Primary custodian of organization culture, external campus partnerships, and overall strategy. Responsible for chairing executive committee meetings and representing the org to the University Student Affairs Office.",
    },
    {
      title: "2. Recurring Tasks & Cadences",
      icon: <Calendar size={16} className="text-accent" />,
      content:
        "Weekly: Executive alignment (Mondays 6 PM). Monthly: General Assembly planning & finance audit review. Semesterly: University re-accreditation filing (deadline: 3rd week of September).",
    },
    {
      title: "3. Key Contacts & Trusted Vendors",
      icon: <Contact size={16} className="text-accent" />,
      content:
        "University Advisor: Prof. Eleanor Vance (e.vance@campus.edu). Trusted Shirt Supplier: Marikina Prints (Contact: Kuya Jerry +63 917 555 0192, 10% student org discount).",
    },
    {
      title: "4. Open Items & Watch-outs",
      icon: <AlertTriangle size={16} className="text-amber" />,
      content:
        "Watch-out: Submit venue reservation permits at least 14 days in advance to avoid rejection. Open: Sponsorship package for Annual Hackathon needs follow-up with TechCorp.",
    },
    {
      title: "5. Where Things Are (Document Vault)",
      icon: <FolderOpen size={16} className="text-accent" />,
      content:
        "Directly linked to OrgKit Documents Vault: Constitution (v2025_amended.pdf), Accreditation Certificate (AY26-27.pdf), Brand Kit & High-Res Logos (Drive Folder).",
    },
  ];

  return (
    <div className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-line">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-ink">
              Officer Handover Guide (Template H4)
            </h3>
            <Badge variant="emerald" size="sm">
              Institutional Memory
            </Badge>
          </div>
          <p className="text-xs text-muted">
            Role: President • Term Transition: Outgoing Maria Santos → Incoming Kyle Alcantara
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLocked(!isLocked)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[36px] ${
              isLocked
                ? "bg-emerald-50 text-brand-deep border border-emerald-200"
                : "bg-amber-soft text-amber-strong border border-amber/30"
            }`}
          >
            {isLocked ? (
              <>
                <Lock size={13} className="text-accent" />
                <span>Handover Finalized &amp; Locked</span>
              </>
            ) : (
              <>
                <Unlock size={13} />
                <span>Drafting Mode (Unlocked)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 5-Section Accordion / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Navigation list */}
        <div className="md:col-span-5 space-y-2">
          {sections.map((sec, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSection(idx)}
              className={`w-full text-left p-3 rounded-xl border text-xs font-semibold flex items-center gap-2.5 transition-all min-h-[44px] ${
                activeSection === idx
                  ? "bg-accent/10 border-accent/40 text-brand-deep shadow-sm"
                  : "bg-white border-line text-ink-secondary hover:bg-zinc-50"
              }`}
            >
              {sec.icon}
              <span className="truncate">{sec.title}</span>
            </button>
          ))}

          {/* Admin rights transfer invariant notice */}
          <div className="p-3.5 rounded-xl bg-zinc-50 border border-line text-[11px] text-muted space-y-1">
            <div className="font-semibold text-ink flex items-center gap-1.5">
              <KeyRound size={13} className="text-accent" />
              Atomic Admin Transfer (H5)
            </div>
            <p>
              Requires typing the organization name to verify intent. Enforces{" "}
              <em>"at least one active admin"</em> invariant in a single transaction.
            </p>
          </div>
        </div>

        {/* Section Content Display */}
        <div className="md:col-span-7 p-5 rounded-2xl bg-zinc-50 border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {sections[activeSection].icon}
              <h4 className="font-bold text-ink text-sm sm:text-base">
                {sections[activeSection].title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed bg-white p-4 rounded-xl border border-line">
              {sections[activeSection].content}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] text-muted">
            <span className="flex items-center gap-1 text-accent font-semibold">
              <CheckCircle2 size={13} />
              Autosaved with encryption
            </span>
            <span>Section {activeSection + 1} of 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
