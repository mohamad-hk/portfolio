import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import HeaderScrollHandler from "../lib/HeaderScroll";
import HeaderSm from "./headersm";
import LanguageToggle from "../components/ui/LanguageToggle";

const Header = async () => {
  const logo = "<dev/>";
  const locale = await getLocale();
  const translated = await getTranslations("header");

  return (
    <div
      className="flex flex-row justify-between items-center py-3 px-6 md:px-20 border-b-2 border-muted-foreground/30 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-black/70 backdrop-blur-xl"
      id="header_desktop"
    >
      <HeaderScrollHandler />

      <Link href={`/${locale}`}>{logo}</Link>

      <nav className="hidden md:flex flex-row items-center gap-10 place-self-center">
        <Link href={`/${locale}/#projects`} className="text-muted-foreground hover:text-white">
          {translated("projects")}
        </Link>

        <Link href={`/${locale}/#stack`} className="text-muted-foreground hover:text-white">
          {translated("stack")}
        </Link>

        <Link href={`/${locale}/#experience`} className="text-muted-foreground hover:text-white">
          {translated("experience")}
        </Link>

        <Link href={`/${locale}/#contact`} className="text-muted-foreground hover:text-white">
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
      <LanguageToggle/>

      <HeaderSm />
    </div>
  );
};

export default Header;