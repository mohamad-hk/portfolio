"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "../components/ui/LanguageToggle";
const HeaderSm = () => {
  const [open, setOpen] = useState(false);
  const translated = useTranslations("header");
  const locale = useLocale();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="hover:cursor-pointer md:hidden">
        {open ? <X /> : <Menu />}
      </SheetTrigger>
      <SheetContent className="p-2 pt-10">
        <SheetTrigger asChild>
          <Link
            href={`/${locale}/#projects`}
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            {translated("projects")}
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href={`/${locale}/#stack`}
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            {translated("stack")}
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href={`/${locale}/#experience`}
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            {translated("experience")}
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href={`/${locale}/#contact`}
            className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white text-sm"
          >
            {translated("contact")}
          </Link>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Link
            href="/resume.pdf"
            download="MohammadHosseinKarimi_CV.pdf"
            className="ring-muted-foreground/30 ring-[1px] w-fit rounded-lg px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:ring-primary/50 hover:text-primary"
          >
            {translated("resume")}
          </Link>
        </SheetTrigger>
        <SheetTrigger className="flex md:hidden" asChild>
          <LanguageToggle />
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
};
export default HeaderSm;
