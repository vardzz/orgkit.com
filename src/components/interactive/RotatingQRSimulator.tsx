"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  QrCode,
  ShieldCheck,
  RefreshCw,
  Users,
  CheckCircle2,
  AlertCircle,
  Smartphone,
} from "lucide-react";

export const RotatingQRSimulator: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [hmacCode, setHmacCode] = useState("HMAC-9F82A4");
  const [attendeeCount, setAttendeeCount] = useState(142);
  const [totalCapacity] = useState(150);
  const [recentScans, setRecentScans] = useState<
    Array<{ name: string; time: string; id: string }>
  >([
    { name: "Bea Dimaculangan", time: "Just now", id: "2023-01928" },
    { name: "Kyle Alcantara", time: "12s ago", id: "2022-83912" },
    { name: "Lorenzo Santos", time: "34s ago", id: "2024-11029" },
  ]);
  const [scanToast, setScanToast] = useState<string | null>(null);

  // Rotate QR code timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Generate new hash code
          const newHash =
            "HMAC-" +
            Math.random().toString(36).substring(2, 8).toUpperCase();
          setHmacCode(newHash);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSimulateScan = () => {
    if (attendeeCount >= totalCapacity) return;
    const newCount = attendeeCount + 1;
    setAttendeeCount(newCount);

    const names = [
      "Alyssa Morales",
      "Carlos Reyes",
      "Patricia Gomez",
      "Miguel Tan",
      "Hannah Cruz",
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomId = `2024-${Math.floor(10000 + Math.random() * 90000)}`;

    setRecentScans((prev) => [
      { name: randomName, time: "Just now", id: randomId },
      prev[0],
      prev[1],
    ]);

    setScanToast(`Verified check-in: ${randomName} (${randomId})`);
    setTimeout(() => setScanToast(null), 3000);
  };

  const attendancePercent = ((attendeeCount / totalCapacity) * 100).toFixed(1);

  return (
    <div className="bg-surface rounded-3xl border border-line p-6 sm:p-8 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-line">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-ink">
              Live Rotating Dynamic QR Attendance
            </h3>
            <Badge variant="emerald" size="sm">
              Anti-Fraud Active
            </Badge>
          </div>
          <p className="text-xs text-muted">
            General Assembly 2026 • Main Campus Auditorium
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={handleSimulateScan}
            icon={<Smartphone size={14} />}
          >
            Simulate Student Scan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Live QR Code Card */}
        <div className="md:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/70 shadow-sm">
          {/* QR Container */}
          <div className="relative p-4 rounded-2xl bg-white border border-emerald-200 shadow-md mb-4 group">
            {/* SVG Simulated QR code */}
            <svg
              viewBox="0 0 160 160"
              className="w-40 h-40 sm:w-48 sm:h-48 text-brand-deep transition-all duration-300"
            >
              {/* Corner 1 */}
              <rect x="10" y="10" width="40" height="40" fill="currentColor" rx="4" />
              <rect x="18" y="18" width="24" height="24" fill="white" rx="2" />
              <rect x="24" y="24" width="12" height="12" fill="currentColor" rx="1" />
              {/* Corner 2 */}
              <rect x="110" y="10" width="40" height="40" fill="currentColor" rx="4" />
              <rect x="118" y="18" width="24" height="24" fill="white" rx="2" />
              <rect x="124" y="24" width="12" height="12" fill="currentColor" rx="1" />
              {/* Corner 3 */}
              <rect x="10" y="110" width="40" height="40" fill="currentColor" rx="4" />
              <rect x="18" y="118" width="24" height="24" fill="white" rx="2" />
              <rect x="24" y="124" width="12" height="12" fill="currentColor" rx="1" />
              {/* Pattern data dots changing dynamically */}
              <circle cx="65" cy="25" r="5" fill="currentColor" />
              <circle cx="85" cy="25" r="5" fill="currentColor" />
              <circle cx="65" cy="45" r="5" fill="currentColor" />
              <circle cx="95" cy="45" r="5" fill="currentColor" />
              <circle cx="25" cy="75" r="5" fill="currentColor" />
              <circle cx="45" cy="75" r="5" fill="currentColor" />
              <circle cx="75" cy="75" r="6" fill="#059669" />
              <circle cx="95" cy="75" r="5" fill="currentColor" />
              <circle cx="125" cy="75" r="5" fill="currentColor" />
              <circle cx="65" cy="95" r="5" fill="currentColor" />
              <circle cx="85" cy="115" r="5" fill="currentColor" />
              <circle cx="115" cy="115" r="5" fill="currentColor" />
              <circle cx="135" cy="135" r="5" fill="currentColor" />
              <circle cx="75" cy="135" r="5" fill="currentColor" />
            </svg>

            {/* Center Logo Shield */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg border-2 border-white">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Countdown & Refresh Indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-1">
            <RefreshCw
              size={14}
              className={`text-accent ${secondsLeft === 5 ? "animate-spin" : ""}`}
            />
            <span>Refreshes in {secondsLeft} seconds</span>
          </div>

          <div className="font-mono text-xs text-muted tracking-wider bg-zinc-100 px-3 py-1 rounded-full">
            {hmacCode}
          </div>
        </div>

        {/* Right Column: Attendance Counter & Recent Scans */}
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6">
          {/* Top Live Progress Bar */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-line">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-ink-secondary flex items-center gap-1.5">
                <Users size={16} className="text-accent" />
                Live Attendance Counter
              </span>
              <span className="text-xs font-bold text-accent">
                {attendancePercent}% Checked In
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-ink">
                {attendeeCount}
              </span>
              <span className="text-sm text-muted">/ {totalCapacity} attendees</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-zinc-200 overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300 rounded-full"
                style={{ width: `${(attendeeCount / totalCapacity) * 100}%` }}
              />
            </div>
          </div>

          {/* Toast Notification */}
          {scanToast && (
            <div className="p-3 rounded-xl bg-emerald-100 text-accent-strong text-xs font-semibold flex items-center gap-2 border border-emerald-200 animate-card-fade-in">
              <CheckCircle2 size={16} />
              {scanToast}
            </div>
          )}

          {/* Real-Time Live Scans Feed */}
          <div>
            <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2.5">
              Live Scans Stream (Real-Time)
            </h4>
            <div className="space-y-2">
              {recentScans.map((scan, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-line text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-accent font-bold flex items-center justify-center text-[11px]">
                      {scan.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{scan.name}</p>
                      <p className="text-[10px] text-muted">{scan.id}</p>
                    </div>
                  </div>

                  <span className="text-[11px] text-accent font-medium">
                    {scan.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Anti-Proxy Guarantee Note */}
          <div className="text-[11px] text-muted flex items-center gap-1.5 pt-2 border-t border-line">
            <AlertCircle size={14} className="text-accent shrink-0" />
            <span>
              If a student screenshots this code and texts it, the token expires in &lt;5s,
              making remote proxy check-in impossible.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
