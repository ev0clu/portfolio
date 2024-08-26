import Image from "next/image";
import { navConfig } from "@/config/nav";
import Link from "next/link";

const MainNav = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href={"/"} className="hidden sm:block">
        <Image src="/logo.svg" width={20} height={20} alt="Logo" />
      </Link>
      <ul className="hidden flex-row gap-3 sm:flex">
        {navConfig.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainNav;
