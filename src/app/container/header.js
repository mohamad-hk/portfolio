"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import HeaderScrollHandler from "../lib/HeaderScroll";
import HeaderSm from "./headersm";
import LanguageToggle from "../components/ui/LanguageToggle";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = ({ locale }) => {
  const logo = "<dev/>";
  const [activeSection, setActiveSection] = useState("");
  const translated = useTranslations("header");

  useEffect(() => {
    const sections = ["projects", "stack", "experience", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (section) =>
    activeSection === section
      ? "text-primary transition-colors duration-300"
      : "text-muted-foreground hover:text-white transition-colors duration-300";

  return (
    <div
      className="flex flex-row justify-between items-center py-3 px-6 md:px-20 border-b border-white/5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-[#001219]/80 backdrop-blur-xl"
      id="header_desktop"
    >
      <HeaderScrollHandler />

      <Link href={`/${locale}`}>
        <Image src="/images/logo.png" width={80} height={100} alt="Logo" />
      </Link>

      <nav className="hidden md:flex flex-row items-center gap-10 place-self-center">
        <Link href={`/${locale}/#projects`} className={navLinkClass("projects")}>
          {translated("projects")}
        </Link>

        <Link href={`/${locale}/#stack`} className={navLinkClass("stack")}>
          {translated("stack")}
        </Link>

        <Link href={`/${locale}/#experience`} className={navLinkClass("experience")}>
          {translated("experience")}
        </Link>

        <Link href={`/${locale}/#contact`} className={navLinkClass("contact")}>
          {translated("contact")}
        </Link>

        <a
          href="/resume.pdf"
          download="MohammadHosseinKarimi_CV.pdf"
          className="ring-muted-foreground/30 ring-[1px] rounded-lg px-6 py-2 hover:ring-primary/50 hover:text-primary"
        >
          {translated("resume")}
        </a>
      </nav>

      <div className="hidden md:flex">
        <LanguageToggle />
      </div>

      <HeaderSm />
    </div>
  );
};

export default Header;
