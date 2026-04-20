"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const HeaderSm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="hover:cursor-pointer md:hidden">
        {open ? <X /> : <Menu />}
      </SheetTrigger>
      <SheetContent className="p-2 pt-10">
        <SheetTrigger asChild>
          <Link
            href="#"
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            Projects
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href="#"
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            Stack
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href="#"
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            Experience
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href="#"
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            Contact
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href="#"
            className="ring-muted-foreground/30 ring-[1px] w-fit rounded-lg px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:ring-primary/50 hover:text-primary"
          >
            Resume
          </Link>
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
};
export default HeaderSm;
