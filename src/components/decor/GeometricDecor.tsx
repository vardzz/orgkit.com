import React from "react";

export const GeometricDecor: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10 select-none"
      aria-hidden="true"
    >
      {/* Top Left Artistic Circles & Outlines */}
      <svg
        className="absolute -top-32 -left-32 w-[600px] h-[600px] text-accent opacity-70"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle
          cx="240"
          cy="240"
          r="200"
          fill="currentColor"
          fillOpacity="0.04"
        />
        <circle
          cx="240"
          cy="240"
          r="160"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="240"
          cy="240"
          r="120"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
        <polygon
          points="240,70 248,88 232,88"
          fill="currentColor"
          fillOpacity="0.25"
        />
      </svg>

      {/* Top Right Vibrant Radial Glow */}
      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-3xl" />
      <svg
        className="absolute top-12 -right-20 w-[420px] h-[420px] text-accent/20 opacity-80"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="currentColor"
          fillOpacity="0.08"
        />
      </svg>

      {/* Center Subtle Amber Accent Glow */}
      <div className="absolute top-[45%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-amber-soft/40 blur-3xl -z-10" />

      {/* Bottom Subtle Emerald Glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl -z-10" />
    </div>
  );
};
