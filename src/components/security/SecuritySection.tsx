"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  KeyRound,
  FileCheck2,
  Database,
  EyeOff,
} from "lucide-react";

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: "Google OAuth Verification",
      description:
        "Single-click sign-in using campus institutional or personal Google credentials. No insecure passwords to leak or forget.",
      icon: <KeyRound className="w-5 h-5 text-accent" />,
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Granular permission segregation between Admin, Finance, Officer, and Member accounts, preventing unauthorized financial or roster access.",
      icon: <UserCheck className="w-5 h-5 text-accent" />,
    },
    {
      title: "Atomic Admin Rights Transfer",
      description:
        "Enforces the 'at least one active admin' invariant in a single database transaction with typed organization confirmation before ownership transfers.",
      icon: <Lock className="w-5 h-5 text-accent" />,
    },
    {
      title: "Zero Student Ad Tracking",
      description:
        "Student data belongs strictly to the student and their organization. We never sell, monetize, or broker campus roster data to third parties.",
      icon: <EyeOff className="w-5 h-5 text-accent" />,
    },
    {
      title: "Explicit Privacy Consent Protocol",
      description:
        "Before joining an organization, every student explicitly consents to data collection with timestamped audit records.",
      icon: <FileCheck2 className="w-5 h-5 text-accent" />,
    },
    {
      title: "Complete Data Portability",
      description:
        "Export your rosters, attendance logs, and financial records as clean CSVs at any moment with 1-click officer verification.",
      icon: <Database className="w-5 h-5 text-accent" />,
    },
  ];

  return (
    <section id="security" className="py-16 md:py-24 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" size="md" className="mb-4">
            Security &amp; Student Privacy Guarantee
          </Badge>
          <h2 className="font-card-h2 text-ink mb-4">
            Built to campus privacy and governance standards.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            University clubs manage sensitive student rosters, money, and institutional
            documents. OrgKit provides bank-grade safeguards without the corporate friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-zinc-50 border border-line hover:border-accent/40 hover:bg-white transition-all shadow-sm group"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-line flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-ink mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
