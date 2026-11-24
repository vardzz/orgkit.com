"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Wallet,
  Check,
  X,
  RotateCcw,
  Receipt,
  Mail,
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";

export const DuesReviewSimulator: React.FC = () => {
  const [status, setStatus] = useState<"pending" | "approved" | "rejected">(
    "pending"
  );
  const [collectionTotal, setCollectionTotal] = useState<number>(42250);
  const [pendingCount, setPendingCount] = useState<number>(6);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleApprove = () => {
    setStatus("approved");
    setCollectionTotal((prev) => prev + 250);
    setPendingCount((prev) => Math.max(0, prev - 1));
    setToastMessage("Payment approved! Audit receipt #OR-9812 logged.");
  };

  const handleReject = () => {
    setStatus("rejected");
    setPendingCount((prev) => Math.max(0, prev - 1));
    setToastMessage("Payment rejected: Notification sent to member.");
  };

  const handleUndo = () => {
    if (status === "approved") {
      setCollectionTotal((prev) => prev - 250);
      setPendingCount((prev) => prev + 1);
    } else if (status === "rejected") {
      setPendingCount((prev) => prev + 1);
    }
    setStatus("pending");
    setToastMessage("Action undone. Receipt returned to pending review.");
  };

  const handleSendReminder = () => {
    setToastMessage("Batch email reminders dispatched to 14 unpaid members!");
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-line">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-ink">
              Treasurer Dues Review Queue
            </h3>
            <Badge variant="amber" size="sm">
              Epic 4: Finance
            </Badge>
          </div>
          <p className="text-xs text-muted">
            1st Sem Membership Fee (₱250.00 / member) • Target: ₱48,000
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSendReminder}
            icon={<Mail size={14} className="text-muted" />}
          >
            1-Click Reminders
          </Button>
        </div>
      </div>

      {/* Progress Metric Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-line text-left">
          <span className="text-[11px] font-semibold text-muted block">
            Total Collected
          </span>
          <span className="text-xl font-extrabold text-ink">
            ₱{collectionTotal.toLocaleString()}
          </span>
          <span className="text-[10px] text-accent font-semibold">
            {((collectionTotal / 48000) * 100).toFixed(1)}% of semester target
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-soft/50 border border-amber/30 text-left">
          <span className="text-[11px] font-semibold text-amber-strong block">
            Pending Review
          </span>
          <span className="text-xl font-extrabold text-amber-strong">
            {pendingCount} Receipts
          </span>
          <span className="text-[10px] text-muted">Awaiting treasurer action</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-zinc-50 border border-line text-left">
          <span className="text-[11px] font-semibold text-muted block">
            Payment Channel
          </span>
          <span className="text-base font-bold text-ink">GCash / Maya QR</span>
          <span className="text-[10px] text-muted">Zero personal wallet mixing</span>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="mb-4 p-3 rounded-xl bg-zinc-100 border border-line text-xs font-semibold text-ink flex items-center justify-between animate-card-fade-in">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-accent" />
            {toastMessage}
          </span>
          {status !== "pending" && (
            <button
              onClick={handleUndo}
              className="text-accent hover:underline flex items-center gap-1 text-[11px]"
            >
              <RotateCcw size={12} /> Undo
            </button>
          )}
        </div>
      )}

      {/* The Active Review Card */}
      <div className="p-5 rounded-2xl bg-zinc-50/70 border border-line">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-sm">
              GM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-ink text-sm sm:text-base">
                  Gabriel Mendoza
                </h4>
                <span className="text-[11px] font-mono text-muted bg-white px-2 py-0.5 rounded border border-line">
                  2023-41829
                </span>
              </div>
              <p className="text-xs text-muted">
                Submitted 10 mins ago via member portal
              </p>
            </div>
          </div>

          <div>
            {status === "pending" && (
              <Badge variant="amber" size="sm">
                Pending Verification
              </Badge>
            )}
            {status === "approved" && (
              <Badge variant="emerald" size="sm">
                ✓ Verified &amp; Paid
              </Badge>
            )}
            {status === "rejected" && (
              <Badge variant="neutral" size="sm" className="text-red-600 bg-red-50 border-red-200">
                ✕ Rejected (Needs Re-upload)
              </Badge>
            )}
          </div>
        </div>

        {/* Receipt Mock Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 rounded-xl bg-white border border-line">
          <div>
            <span className="text-xs text-muted block mb-1">Receipt Attachment</span>
            <div className="h-28 rounded-lg bg-zinc-100 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-muted p-2">
              <ImageIcon size={24} className="text-zinc-400 mb-1" />
              <span className="text-xs font-semibold text-ink">
                gcash_screenshot_ref8923.png
              </span>
              <span className="text-[10px] text-muted">
                Reference: 1029 8847 2910 • 1080x2400
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between py-1">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted">Amount Due:</span>
                <span className="font-bold text-ink">₱250.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Sender GCash:</span>
                <span className="font-mono text-ink">0917 ••• 1029</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Reference No:</span>
                <span className="font-mono text-ink font-semibold">
                  892301938102
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Audit Hash:</span>
                <span className="font-mono text-[10px] text-muted">
                  SHA256:e8f9a2b...
                </span>
              </div>
            </div>

            <div className="text-[11px] text-accent font-medium mt-2">
              ✓ Matches organization GCash QR receiver account
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-line/60">
          <span className="text-xs text-muted">
            Review status updates member dashboard immediately
          </span>

          <div className="flex items-center gap-2">
            {status === "pending" ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReject}
                  icon={<X size={14} className="text-red-500" />}
                  className="hover:border-red-300 hover:text-red-600"
                >
                  Reject
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleApprove}
                  icon={<Check size={14} />}
                >
                  Approve (₱250)
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={handleUndo}
                icon={<RotateCcw size={14} />}
              >
                Undo Review
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
