"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { RotatingQRSimulator } from "./RotatingQRSimulator";
import { DuesReviewSimulator } from "./DuesReviewSimulator";
import { RosterFilterSimulator } from "./RosterFilterSimulator";
import { HandoverGuidePreview } from "./HandoverGuidePreview";
import { QrCode, Wallet, Users, BookOpen, Sparkles } from "lucide-react";

export const InteractiveDemos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"qr" | "dues" | "roster" | "handover">("qr");

  return (
    <section id="interactive-demos" className="py-16 md:py-24 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Badge variant="emerald" size="md" className="mb-4">
            Interactive Product Sandbox
          </Badge>
          <h2 className="font-card-h2 text-ink mb-4">
            Test OrgKit's live features right here.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Experience how fast, frictionless, and secure organization operations
            feel for both campus officers and general student members.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab("qr")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
              activeTab === "qr"
                ? "bg-accent text-white shadow-button"
                : "bg-zinc-100 text-ink-secondary hover:bg-zinc-200"
            }`}
          >
            <QrCode size={16} />
            <span>1. Rotating Anti-Fraud QR</span>
          </button>

          <button
            onClick={() => setActiveTab("dues")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
              activeTab === "dues"
                ? "bg-amber text-white shadow-button"
                : "bg-zinc-100 text-ink-secondary hover:bg-zinc-200"
            }`}
          >
            <Wallet size={16} />
            <span>2. Treasurer Dues Queue</span>
          </button>

          <button
            onClick={() => setActiveTab("roster")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
              activeTab === "roster"
                ? "bg-ink text-white shadow-button"
                : "bg-zinc-100 text-ink-secondary hover:bg-zinc-200"
            }`}
          >
            <Users size={16} />
            <span>3. Dynamic Member Roster</span>
          </button>

          <button
            onClick={() => setActiveTab("handover")}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
              activeTab === "handover"
                ? "bg-accent text-white shadow-button"
                : "bg-zinc-100 text-ink-secondary hover:bg-zinc-200"
            }`}
          >
            <BookOpen size={16} />
            <span>4. Officer Handover Vault</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "qr" && <RotatingQRSimulator />}
          {activeTab === "dues" && <DuesReviewSimulator />}
          {activeTab === "roster" && <RosterFilterSimulator />}
          {activeTab === "handover" && <HandoverGuidePreview />}
        </div>
      </div>
    </section>
  );
};
