import Image from "next/image";
import { navConfig } from "@/config/nav";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <Link href={"/"} className="hidden sm:block" aria-label="Home link">
        <Image src="/logo.svg" width={20} height={20} alt="Logo" />
      </Link>
      <ul className="hidden flex-row gap-6 font-semibold sm:flex">
        {navConfig.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
