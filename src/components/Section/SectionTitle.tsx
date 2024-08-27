import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "mb-6 text-center text-4xl font-semibold text-emerald-500 sm:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
