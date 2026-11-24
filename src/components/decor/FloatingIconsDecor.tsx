import React from "react";
import { Users, Calendar, Wallet, QrCode, FileText, ClipboardCheck } from "lucide-react";

export const FloatingIconsDecor: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none -z-10 hidden xl:block select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Users Card (-7deg tilt, Top-Left) */}
      <div
        className="absolute top-8 left-4 2xl:left-12 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-surface border border-line shadow-card text-ink-secondary -rotate-6 animate-pulse-slow"
        style={{ animationDuration: "5s" }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-accent flex items-center justify-center">
          <Users size={17} strokeWidth={2} />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-ink">348 Members</p>
          <p className="text-[10px] text-muted">Roster synced</p>
        </div>
      </div>

      {/* 2. Calendar Card (-5deg tilt, Mid-Left) */}
      <div
        className="absolute top-52 -left-6 2xl:left-4 flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-surface/95 backdrop-blur-sm border border-line shadow-card -rotate-3"
      >
        <div className="w-7 h-7 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
          <Calendar size={15} strokeWidth={2} />
        </div>
        <span className="text-xs font-semibold text-ink">General Assembly</span>
      </div>

      {/* 3. Wallet Card (+7deg tilt, Bottom-Left) */}
      <div
        className="absolute -bottom-4 left-8 2xl:left-16 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-surface border border-amber/30 shadow-card text-amber-strong rotate-6"
      >
        <div className="w-7 h-7 rounded-xl bg-amber-soft text-amber flex items-center justify-center">
          <Wallet size={15} strokeWidth={2} />
        </div>
        <div className="text-left">
          <span className="text-[11px] font-bold">Dues: ₱42,500</span>
          <span className="block text-[9px] text-muted">88% collected</span>
        </div>
      </div>

      {/* 4. QR Code Card (+7deg tilt, Top-Right) */}
      <div
        className="absolute top-10 right-4 2xl:right-12 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-accent text-white shadow-floating rotate-6"
      >
        <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
          <QrCode size={16} strokeWidth={2} />
        </div>
        <div className="text-left">
          <span className="text-xs font-bold tracking-wide">Dynamic QR</span>
          <span className="block text-[10px] text-emerald-100">Fraud-proof</span>
        </div>
      </div>

      {/* 5. Documents Card (-8deg tilt, Mid-Right) */}
      <div
        className="absolute top-56 -right-6 2xl:right-4 flex items-center gap-2 px-3 py-2 rounded-2xl bg-surface border border-line shadow-card -rotate-6"
      >
        <div className="w-7 h-7 rounded-xl bg-zinc-100 text-ink-secondary flex items-center justify-center">
          <FileText size={15} strokeWidth={2} />
        </div>
        <span className="text-xs font-medium text-ink">Constitution & Bylaws</span>
      </div>

      {/* 6. Handover Card (+5deg tilt, Bottom-Right) */}
      <div
        className="absolute -bottom-6 right-8 2xl:right-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-surface border border-emerald-200/80 shadow-card text-accent rotate-3"
      >
        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-accent flex items-center justify-center">
          <ClipboardCheck size={16} strokeWidth={2} />
        </div>
        <span className="text-xs font-semibold text-brand-deep">
          Officer Handover Locked
        </span>
      </div>
    </div>
  );
};
