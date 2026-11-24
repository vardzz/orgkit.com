"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "We checked in over 380 attendees at our Annual General Assembly in under 7 minutes. The rotating QR code completely killed proxy cheating — nobody could text screenshots to absent friends.",
      author: "Alyssa Morales",
      role: "Supreme Student Council President",
      university: "University of the Philippines Diliman",
      initials: "AM",
      tag: "Dynamic QR Attendance",
    },
    {
      quote:
        "Before OrgKit, reviewing dues meant scrolling through 200+ messy GCash receipts in my personal messenger. OrgKit's Treasurer Queue let me approve 50 receipts in 5 minutes with full audit trails.",
      author: "Carlos Tan",
      role: "VP for Finance & Dues Officer",
      university: "De La Salle University",
      initials: "CT",
      tag: "Treasurer Queue",
    },
    {
      quote:
        "When our senior officers graduated, we used to lose all event permits, constitution drafts, and supplier contacts. OrgKit's Handover Guide gave our incoming team a turn-key roadmap on day one.",
      author: "Patricia Gomez",
      role: "Secretary General",
      university: "University of Santo Tomas",
      initials: "PG",
      tag: "Handover Vault",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="amber" size="md" className="mb-4">
            Tested Across Campus Chapters
          </Badge>
          <h2 className="font-card-h2 text-ink mb-4">
            Built by student leaders, for student leaders.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Hear from executive officers who replaced chaotic spreadsheets and
            scattered messaging groups with OrgKit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card flex flex-col justify-between hover:shadow-floating transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-accent border border-emerald-200/50">
                    {item.tag}
                  </span>
                  <div className="flex text-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        className="text-amber"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm">{item.author}</h4>
                  <p className="text-[11px] text-muted">{item.role}</p>
                  <p className="text-[10px] text-accent font-medium">
                    {item.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
