"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  CalendarDays,
  Wallet,
  ShieldCheck,
  FolderOpen,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const floatingIcons = [
  {
    Icon: Users,
    className: "left-[7%] top-[22%]",
    delay: 0,
    rotate: -12,
  },
  {
    Icon: CalendarDays,
    className: "left-[16%] top-[48%]",
    delay: 0.5,
    rotate: 9,
  },
  {
    Icon: Wallet,
    className: "right-[13%] top-[24%]",
    delay: 0.8,
    rotate: 12,
  },
  {
    Icon: ShieldCheck,
    className: "right-[7%] top-[48%]",
    delay: 0.3,
    rotate: -10,
  },
  {
    Icon: FolderOpen,
    className: "right-[20%] top-[66%]",
    delay: 1,
    rotate: 8,
  },
];

function FloatingIcons() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {floatingIcons.map(({ Icon, className, delay, rotate }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className}`}
          initial={{ opacity: 0, y: 15, rotate: rotate - 5 }}
          animate={{
            opacity: 1,
            y: shouldReduceMotion ? 0 : [0, -12, 0],
            rotate: shouldReduceMotion ? rotate : [rotate, rotate + 4, rotate],
          }}
          transition={{
            opacity: { duration: 0.8, delay },
            y: {
              duration: 5 + index,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut",
              delay,
            },
            rotate: {
              duration: 6,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut",
              delay,
            },
          }}
        >
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/90 text-emerald-700 shadow-[0_8px_30px_rgba(24,24,27,0.06)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-200">
            <Icon size={23} strokeWidth={1.6} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 w-full max-w-[1040px]"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-emerald-100/60 blur-[90px]" />

      {/* Browser frame */}
      <div className="overflow-hidden rounded-t-2xl border border-zinc-200 bg-white shadow-[0_30px_90px_rgba(24,24,27,0.09)]">
        {/* Browser header */}
        <div className="flex h-11 items-center border-b border-zinc-100 px-5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>

          <div className="mx-auto rounded-md bg-zinc-50 px-16 py-1 text-[10px] text-zinc-400">
            app.orgkit.com
          </div>
        </div>

        <div className="grid min-h-[370px] grid-cols-[180px_1fr]">
          {/* Sidebar */}
          <aside className="hidden border-r border-zinc-100 p-5 sm:block text-left">
            <div className="mb-8 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Users size={15} />
              </div>
              <span className="text-sm font-bold tracking-tight text-zinc-900">
                OrgKit
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {[
                ["Overview", ClipboardCheck],
                ["Members", Users],
                ["Events", CalendarDays],
                ["Dues", Wallet],
                ["Documents", FolderOpen],
              ].map(([label, Icon], i) => {
                const ItemIcon = Icon as typeof Users;

                return (
                  <div
                    key={label as string}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
                      i === 0
                        ? "bg-emerald-50 font-medium text-emerald-800"
                        : "text-zinc-500"
                    }`}
                  >
                    <ItemIcon size={15} />
                    {label as string}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Dashboard content */}
          <div className="min-w-0 bg-[#FAFAFA] p-5 sm:p-8 text-left">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">
                  Computer Science Society
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
                  Good morning, CS Society.
                  <span className="ml-1">👋</span>
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  Here's what's happening with your organization.
                </p>
              </div>

              <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800 sm:flex">
                CS
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Total Members",
                  value: "248",
                  Icon: Users,
                },
                {
                  label: "Upcoming Events",
                  value: "03",
                  Icon: CalendarDays,
                },
                {
                  label: "Dues Collected",
                  value: "₱12,500",
                  Icon: Wallet,
                },
              ].map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-zinc-200/80 bg-white p-4"
                >
                  <Icon size={18} className="mb-4 text-emerald-600" />
                  <p className="text-xl font-semibold tracking-tight text-zinc-900">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Lower panels */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200/80 bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold text-zinc-800">
                    Upcoming Event
                  </p>
                  <CalendarDays size={15} className="text-emerald-600" />
                </div>
                <p className="text-sm font-semibold text-zinc-900">
                  General Assembly
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  November 30 · 9:00 AM
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[75%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200/80 bg-white p-4">
                <p className="mb-4 text-xs font-semibold text-zinc-800">
                  Recent Activity
                </p>
                {[
                  "New member joined",
                  "Payment received",
                  "Event created",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-b border-zinc-100 py-2 last:border-0"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === 1 ? "bg-amber-500" : "bg-emerald-500"
                      }`}
                    />
                    <span className="text-[11px] text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] tracking-wide text-zinc-400">
        A glimpse into your organization's new home.
      </p>
    </motion.div>
  );
}

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white text-zinc-900 pt-16 pb-16 sm:pt-24 sm:pb-24">
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #71717a 1px, transparent 1px), linear-gradient(to bottom, #71717a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center px-5 text-center sm:px-8">
        <FloatingIcons />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <span className="text-[11px] font-medium tracking-wide text-emerald-900 sm:text-xs">
              THE WORKSPACE FOR STUDENT ORGANIZATIONS
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-[850px] text-[clamp(42px,7vw,76px)] font-semibold leading-[1.06] tracking-[-0.055em] text-zinc-950">
            A better way to run
            <br className="hidden sm:block" />
            your{" "}
            <span className="relative inline-block text-emerald-700">
              student org.
              <span
                aria-hidden="true"
                className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-xl bg-emerald-100/70"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-7 max-w-[620px] text-base leading-relaxed text-zinc-500 sm:text-lg">
            Members, events, dues, and everything your team needs.
            All in one place.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#cta"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 text-sm font-medium text-white shadow-[0_4px_14px_rgba(5,150,105,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
            >
              Get started free
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#features"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-7 text-sm font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              Explore the workspace
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="mt-9 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["A", "M", "J", "K"].map((initial, i) => (
                <div
                  key={initial}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-semibold text-white ${
                    ["bg-emerald-700", "bg-zinc-700", "bg-amber-600", "bg-emerald-500"][i]
                  }`}
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500">
              Built for student leaders, by student leaders.
            </p>
          </div>
        </motion.div>

        {/* Dashboard */}
        <DashboardPreview />
      </div>
    </section>
  );
};

export default HeroSection;
