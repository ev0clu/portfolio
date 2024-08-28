import { TNavConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: TNavConfig;
  className?: string;
}

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section
      id={id}
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
