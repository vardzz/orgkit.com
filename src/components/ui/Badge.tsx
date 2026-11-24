import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "amber" | "neutral" | "brand";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "emerald",
  size = "md",
  className = "",
  icon,
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs font-medium gap-1",
    md: "px-3.5 py-1 text-xs md:text-sm font-semibold gap-1.5",
  };

  const variantClasses = {
    emerald: "bg-emerald-50 text-accent border border-emerald-200/60",
    amber: "bg-amber-soft text-amber-strong border border-amber-200/60",
    neutral: "bg-zinc-100 text-ink-secondary border border-line",
    brand: "bg-accent/10 text-brand-deep border border-accent/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
