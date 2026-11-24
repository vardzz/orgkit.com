import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "google" | "outline" | "ghost" | "amber";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-150 select-none btn-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm min-h-[38px] gap-1.5",
    md: "px-5 py-2.5 text-sm md:text-base min-h-[44px] gap-2",
    lg: "px-7 py-3.5 text-base md:text-lg min-h-[52px] font-semibold gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-accent hover:bg-accent-strong text-white shadow-button hover:shadow-button-hover active:bg-accent-strong",
    secondary:
      "bg-surface text-ink border border-line hover:border-line-subtle hover:bg-zinc-50 shadow-button",
    google:
      "bg-surface text-ink border-2 border-line hover:border-zinc-300 hover:bg-zinc-50/80 shadow-button active:scale-[0.995]",
    outline:
      "bg-transparent text-ink border border-line hover:bg-surface/80 hover:border-zinc-300",
    ghost:
      "bg-transparent text-ink-secondary hover:text-ink hover:bg-zinc-200/60",
    amber:
      "bg-amber text-white hover:bg-amber-strong shadow-button hover:shadow-button-hover",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
