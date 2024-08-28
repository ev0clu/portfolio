"use client";

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

const SCROLL_OFFSET = 70;

// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
