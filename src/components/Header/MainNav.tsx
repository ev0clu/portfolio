"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollContext } from "../ScrollProvider";
import { navConfig } from "@/config/nav";
import ScrollLink from "./ScrollLink";

const MainNav = () => {
  const { activeSection } = useScrollContext();

  return (
    <nav className="flex flex-row items-center justify-between">
      <Link href={"/"} className="hidden sm:block" aria-label="Home link">
        <Image src="/logo.svg" width={20} height={20} priority alt="Logo" />
      </Link>
      <ul className="hidden flex-row gap-6 font-semibold sm:flex">
        {navConfig.map((element) => (
          <li key={element} className="relative">
            <ScrollLink href={`#${element}`} name={element}>
              {element}
            </ScrollLink>
            {activeSection === element && (
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] w-full bg-emerald-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
