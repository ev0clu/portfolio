"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useScrollContext } from "../ScrollProvider";
import { TNavConfig } from "@/config/nav";

interface SectionProps {
  children: ReactNode;
  id: TNavConfig | "Hosting";
  className?: string;
}

const Section = ({ children, id, className }: SectionProps) => {
  const { setActiveSection } = useScrollContext();

  const { ref } = useInView({
    //root: null,
    rootMargin: "0px 0px -100% 0px",
    threshold: 0,
    // triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        if (id !== "Hosting") {
          setActiveSection(id);
        }
      }
    },
  });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "flex w-full flex-col items-center justify-center pt-16",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
