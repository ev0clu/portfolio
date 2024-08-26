"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { navConfig } from "@/config/nav";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 h-6 px-0 py-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetTitle className="sr-only"></SheetTitle>
      <SheetDescription className="sr-only"></SheetDescription>
      <SheetContent side={"left"} className="px-8 py-3">
        {navConfig.map((element) => (
          <li key={element} className="list-none">
            {element}
          </li>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
