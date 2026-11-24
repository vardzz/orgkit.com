"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-white border-t border-zinc-200/80 text-zinc-600 overflow-hidden font-sans">
      {/* Top Pre-Footer Callout Banner */}
      <div className="border-b border-zinc-100 bg-gradient-to-b from-[#FAFAFA] to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center justify-center p-2 shrink-0">
              <Image
                src="/orgkit-logo-mask.png"
                alt="OrgKit Mark"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
                Ready to transform your student organization?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                Join collegiate leaders managing rosters, dues, and events in one place.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className="px-4 py-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#signup"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-800 text-white text-xs sm:text-sm font-medium hover:bg-emerald-900 transition-all shadow-xs hover:shadow-sm"
            >
              <span>Get started free</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/orgkit-text-logo.png"
                alt="OrgKit"
                width={130}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              The modern operating system engineered specifically for university student organizations, collegiate societies, and youth non-profits.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/60 text-xs text-zinc-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="font-medium text-[11px] text-zinc-700">
                All systems operational • v2.0
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:support@orgkit.com"
                className="w-8 h-8 rounded-lg border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
                aria-label="Email Support"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#features" className="hover:text-emerald-700 transition-colors">
                  Member Management
                </Link>
              </li>
              <li>
                <Link href="#attendance" className="hover:text-emerald-700 transition-colors">
                  QR Event Attendance
                </Link>
              </li>
              <li>
                <Link href="#dues" className="hover:text-emerald-700 transition-colors">
                  Dues &amp; Receipts
                </Link>
              </li>
              <li>
                <Link href="#documents" className="hover:text-emerald-700 transition-colors">
                  Document Vault
                </Link>
              </li>
              <li>
                <Link href="#handover" className="hover:text-emerald-700 transition-colors">
                  Officer Transitions
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-emerald-700 transition-colors">
                  Free Forever Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Security */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Governance &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#security" className="hover:text-emerald-700 transition-colors">
                  Role-Based Access (RBAC)
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-emerald-700 transition-colors">
                  Student Privacy Protocol
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-emerald-700 transition-colors">
                  Zero Ad-Tracking Policy
                </Link>
              </li>
              <li>
                <Link href="#export" className="hover:text-emerald-700 transition-colors">
                  Data Portability &amp; CSV Export
                </Link>
              </li>
              <li>
                <Link href="#audit" className="hover:text-emerald-700 transition-colors">
                  Audit Logging &amp; Invariants
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Stay Updated */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Campus Briefing
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Subscribe to our monthly briefing for officer templates, transition guides, and feature releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-1.5 p-1 rounded-xl border border-zinc-200 bg-white focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  required
                  className="w-full px-2.5 py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 bg-transparent outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-emerald-800 transition-colors shrink-0 flex items-center gap-1"
                >
                  {subscribed ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span>Joined</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight size={12} />
                    </>
                  )}
                </button>
              </div>
              <span className="text-[10px] text-zinc-400 block">
                No spam. Unsubscribe anytime with one click.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-md bg-zinc-100 flex items-center justify-center p-0.5">
              <Image
                src="/orgkit-logo-mask.png"
                alt="OrgKit"
                width={16}
                height={16}
                className="w-full h-full object-contain"
              />
            </div>
            <p>
              &copy; {new Date().getFullYear()} OrgKit. All rights reserved. Free for student organizations.
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-zinc-500">
            <Link href="#privacy" className="hover:text-zinc-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-zinc-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#security" className="hover:text-zinc-900 transition-colors">
              Security
            </Link>
            <Link href="mailto:support@orgkit.com" className="hover:text-zinc-900 transition-colors">
              Campus Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
