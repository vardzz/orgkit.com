"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is OrgKit really free for university student organizations?",
      a: "Yes! OrgKit was engineered specifically for collegiate societies, academic clubs, and campus non-profits. Core features—including member rosters, dynamic QR attendance, dues review, and handover guides—are free forever for student leaders.",
    },
    {
      q: "How does the rotating anti-fraud QR code stop screenshot cheating?",
      a: "Unlike static QR codes or Google Forms that students screenshot and text to absent roommates, OrgKit uses an HMAC rotating timer. The projected QR code refreshes every few seconds. An image forwarded via chat expires before the recipient can scan it.",
    },
    {
      q: "Can we import our existing Google Sheets roster?",
      a: "Absolutely. OrgKit features a smart CSV bulk importer with automatic header detection (mapping Student Name, Email, Student Number, and Contact). You can review mappings before finalizing the import in seconds.",
    },
    {
      q: "How does the Treasurer Review Queue handle dues without mixing personal accounts?",
      a: "Officers designate an official org payment destination (such as an organization GCash QR, Maya merchant, or designated bank account). Members upload their payment receipt screenshot and reference number to `/pay/[token]`. Treasurers review all submissions in a high-speed verification queue with instant Approve, Reject, or Undo actions.",
    },
    {
      q: "What happens when officers graduate and hand over the organization?",
      a: "OrgKit solves the annual knowledge wipeout with Structured Handover Guides (Template H4) covering duties, recurring tasks, trusted vendor contacts, and document links. The Atomic Admin Transfer tool transfers ownership to incoming officers with typed confirmation, guaranteeing zero account lockouts.",
    },
    {
      q: "Does OrgKit work on smartphones without downloading an app?",
      a: "Yes! OrgKit is 100% mobile-first and works directly inside mobile web browsers (Safari, Chrome, or in-app webviews). It strictly complies with 360px viewport standards and 44px thumb-friendly touch ergonomics.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface border-t border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="emerald" size="md" className="mb-4">
            Got Questions?
          </Badge>
          <h2 className="font-card-h2 text-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Everything you need to know about adopting OrgKit for your university
            organization this semester.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-line bg-zinc-50/70 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-ink text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-line flex items-center justify-center shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent border-accent/40" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-line/60 pt-4 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
