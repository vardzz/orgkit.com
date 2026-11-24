import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  padded?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverLift = false,
  padded = true,
}) => {
  return (
    <div
      className={`bg-surface border border-line rounded-3xl shadow-floating transition-all duration-200 ${
        padded ? "p-6 sm:p-8" : ""
      } ${
        hoverLift
          ? "hover:-translate-y-1 hover:shadow-floating-lg hover:border-zinc-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
