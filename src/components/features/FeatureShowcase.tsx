"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Users,
  QrCode,
  Wallet,
  BookOpen,
  CheckCircle2,
  Shield,
  ArrowRight,
  FileSpreadsheet,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";

export const FeatureShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" size="md" className="mb-4">
            End-to-End Operational Architecture
          </Badge>
          <h2 className="font-card-h2 text-ink mb-4">
            Engineered exclusively for university leadership.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            No corporate bloat. No confusing enterprise jargon. Just the four core
            pillars student officers need to govern effectively every single semester.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1: Member Roster & Onboarding */}
          <div className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card hover:shadow-floating transition-all group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center font-bold">
                <Users size={24} strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-ink-secondary">
                Epic 2: Membership
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
              Self-Serve Member Onboarding &amp; Roster
            </h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
              Drop your custom invite link or QR code in group chats. Students join in
              10 seconds with Google Auth, acknowledge your privacy consent agreement,
              and build your active roster automatically.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Universal join link (`/join/[token]`) &amp; booth QR codes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Smart CSV import with auto-mapping headers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Filter by active, pending, or inactive membership status
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-line text-xs flex items-center justify-between">
              <span className="text-muted font-mono">/join/css-up-2026</span>
              <span className="font-semibold text-accent">Active link</span>
            </div>
          </div>

          {/* Feature 2: Rotating HMAC QR Attendance */}
          <div id="attendance" className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card hover:shadow-floating transition-all group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center font-bold">
                <QrCode size={24} strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100/70 text-accent-strong">
                Epic 3: Anti-Fraud
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
              Fraud-Proof Rotating QR Attendance
            </h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
              Say goodbye to attendance proxy cheating. OrgKit projects a dynamic HMAC QR
              code that rotates on a tight countdown timer. Screenshots sent to absent
              friends expire before they can be scanned.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                1-second phone camera scan (no app download needed)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Live real-time attendee counter updates as members enter
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Past events historical logs with term and date filters
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-xs flex items-center justify-between text-accent-strong">
              <span className="font-semibold flex items-center gap-1.5">
                <Sparkles size={14} /> HMAC cryptographic timer active
              </span>
              <span className="font-bold">4.2s refresh</span>
            </div>
          </div>

          {/* Feature 3: Dues & Treasurer Review Queue */}
          <div id="dues" className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card hover:shadow-floating transition-all group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-soft text-amber flex items-center justify-center font-bold">
                <Wallet size={24} strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-strong">
                Epic 4: Finance
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-amber transition-colors">
              Dues Portal &amp; High-Speed Review Queue
            </h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
              Keep personal and club finances clean. Members upload GCash or bank
              receipts to a dedicated collection portal. Treasurers review receipts with
              instant preview, Approve, Reject, or Undo.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber shrink-0" />
                Collection periods with deadlines and custom fee targets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber shrink-0" />
                1-click automated batch email reminders to unpaid members
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber shrink-0" />
                Audit trails with quick Undo for mistaken rejections
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-amber-soft/50 border border-amber/30 text-xs flex items-center justify-between text-amber-strong">
              <span className="font-semibold">Review Queue Status</span>
              <span className="font-bold">6 receipts waiting</span>
            </div>
          </div>

          {/* Feature 4: Handover Guides & Institutional Vault */}
          <div id="handover" className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card hover:shadow-floating transition-all group">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center font-bold">
                <BookOpen size={24} strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-ink-secondary">
                Epic 5: Governance
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
              Structured Handover Guides &amp; Vault
            </h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
              Graduate without leaving your successors stranded. Store bylaws and permits
              in a categorized repository, and compile autosaved handover guides locked
              upon official admin transition.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Structured guides: duties, recurring tasks, contacts &amp; watch-outs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Categorized documents (Finance, Legal, Templates, General)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Atomic Admin Rights Transfer with typed confirmation
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-line text-xs flex items-center justify-between text-ink-muted">
              <span className="flex items-center gap-1.5 font-medium">
                <Lock size={13} className="text-accent" /> Institutional memory preserved
              </span>
              <span className="font-bold text-brand-deep">Zero Data Loss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
