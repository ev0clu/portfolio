"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollContext } from "../ScrollProvider";
import { navConfig } from "@/config/nav";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const { activeSection } = useScrollContext();

  return (
    <nav className="flex flex-row items-center justify-between">
      <Link href={"/"} className="hidden sm:block" aria-label="Home link">
        <Image src="/logo.svg" width={20} height={20} alt="Logo" />
      </Link>
      <ul className="hidden flex-row gap-6 font-semibold sm:flex">
        {navConfig.map((element) => (
          <li key={element}>
            <Link
              href={`#${element}`}
              className={cn("font-semibold", {
                "text-red-500": activeSection === element,
              })}
            >
              {element}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
