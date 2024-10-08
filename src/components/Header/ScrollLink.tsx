"use client";

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { useScrollContext } from "../ScrollProvider";
import { TNavConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import { animate, cubicBezier } from "framer-motion";

const SCROLL_OFFSET = 1;

// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type CustomProps = {
  name: TNavConfig;
};
type ScrollLinkProps = AnchorProps &
  LinkProps &
  PropsWithChildren &
  CustomProps;

const ScrollLink = ({ children, name, ...props }: ScrollLinkProps) => {
  const { activeSection } = useScrollContext();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      const easing = cubicBezier(0.5, 0, 0.5, 1.0); // Ease-In-Out

      animate(window.scrollY, offsetPosition, {
        duration: 0.4, // Duration of the scroll animation
        ease: easing, // Apply the custom easing curve
        onUpdate: (value) => window.scrollTo(0, value),
      });
    }
  };
  return (
    <Link
      {...props}
      className={cn("font-semibold", {
        "text-emerald-500": activeSection === name,
      })}
      onClick={handleScroll}
    >
      {children}
    </Link>
  );
};
export default ScrollLink;
