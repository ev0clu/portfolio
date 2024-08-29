"use client";

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { useScrollContext } from "../ScrollProvider";
import { TNavConfig } from "@/config/nav";
import { cn } from "@/lib/utils";

const SCROLL_OFFSET = 70;

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
  const { activeSection, setActiveSection } = useScrollContext();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      setActiveSection(name);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link
      {...props}
      className={cn("font-semibold", {
        "text-red-500": activeSection === name,
      })}
      onClick={handleScroll}
    >
      {children}
    </Link>
  );
};
export default ScrollLink;
