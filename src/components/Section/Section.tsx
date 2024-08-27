import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={cn(
        "my-16 flex w-full flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
