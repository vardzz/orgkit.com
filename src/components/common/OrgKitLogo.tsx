import React from "react";

export const OrgKitLogo: React.FC<{
  size?: "sm" | "md" | "lg";
  withText?: boolean;
  className?: string;
}> = ({ size = "md", withText = true, className = "" }) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* OrgKit Modern Geometric Emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-strong text-white shadow-md shadow-accent/20 shrink-0 ring-1 ring-accent/30`}
      >
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Stylized interconnected nodes representing Org & Kit */}
          <circle cx="9" cy="9" r="4.5" fill="white" />
          <circle cx="19" cy="9" r="3" fill="white" fillOpacity="0.75" />
          <circle cx="19" cy="19" r="4" fill="#FEF3C7" />
          <path
            d="M9 13.5V18C9 19.1046 9.89543 20 11 20H15"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M13.5 9H16"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {withText && (
        <span
          className={`font-extrabold tracking-tight text-ink font-sans flex items-center ${textSizes[size]}`}
        >
          Org<span className="text-accent">Kit</span>
        </span>
      )}
    </div>
  );
};
