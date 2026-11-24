"use client";

import React from "react";
import Link from "next/link";
import { OrgKitLogo } from "@/components/common/OrgKitLogo";
import { Heart, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-line pt-14 pb-12 text-xs text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <OrgKitLogo size="md" />
            <p className="text-muted leading-relaxed max-w-sm">
              The modern operating system for university student organizations,
              academic clubs, collegiate societies, and youth non-profits.
            </p>
            <div className="flex items-center gap-2 text-ink text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>All Systems Operational • Campus v2.0</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-ink uppercase tracking-wider text-[11px]">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-accent transition-colors">
                  Member Roster
                </a>
              </li>
              <li>
                <a href="#attendance" className="hover:text-accent transition-colors">
                  Anti-Fraud QR
                </a>
              </li>
              <li>
                <a href="#dues" className="hover:text-accent transition-colors">
                  Treasurer Queue
                </a>
              </li>
              <li>
                <a href="#handover" className="hover:text-accent transition-colors">
                  Handover Vault
                </a>
              </li>
            </ul>
          </div>

          {/* Governance Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-ink uppercase tracking-wider text-[11px]">
              Governance
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#security" className="hover:text-accent transition-colors">
                  Security &amp; RBAC
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-accent transition-colors">
                  Privacy by Default
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  Student FAQ
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-accent transition-colors">
                  Free Forever Tier
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Ecosystem */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-ink uppercase tracking-wider text-[11px]">
              Campus Commitment
            </h4>
            <p className="text-[11px] text-muted leading-relaxed">
              OrgKit was conceptualized and engineered to support university
              student councils, academic societies, and collegiate clubs with
              transparent, ad-free leadership tools.
            </p>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted">
          <div>
            &copy; {new Date().getFullYear()} OrgKit. All rights reserved. Free for
            collegiate organizations.
          </div>

          <div className="flex items-center gap-6">
            <a href="#security" className="hover:underline">
              Terms of Service
            </a>
            <a href="#security" className="hover:underline">
              Student Privacy Protocol
            </a>
            <a href="#faq" className="hover:underline">
              Contact Campus Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
