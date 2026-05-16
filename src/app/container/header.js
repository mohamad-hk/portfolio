import Link from "next/link";

import HeaderScrollHandler from "../lib/HeaderScroll";
import HeaderSm from "./headersm";
const Header = () => {
  const logo = "<dev/>";
  return (
    <div
      className="flex flex-row justify-between items-center py-3 px-6 md:px-20 border-b-2 border-muted-foreground/30 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-black/70 backdrop-blur-xl "
      id="header_desktop"
    >
      <HeaderScrollHandler />
      <Link href={"/"}>{logo}</Link>

      <nav className=" hidden md:flex flex-row items-center gap-10 place-self-center">
        <Link
          href="#projects"
          className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/#stack"
          className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white"
        >
          Stack
        </Link>
        <Link
          href="/#experience"
          className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white"
        >
          Experience
        </Link>
        <Link
          href="/#contact"
          className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-white"
        >
          Contact
        </Link>
        <a
          href="/resume.pdf"
          download="MohammadHosseinKarimi_CV.pdf"
          className="ring-muted-foreground/30 ring-[1px] rounded-lg px-6 py-2 transition-all duration-200 ease-in-out hover:ring-primary/50 hover:text-primary"
        >
          Resume
        </a>
      </nav>
      <HeaderSm />
    </div>
  );
};
export default Header;
