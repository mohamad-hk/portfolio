"use client";

import { useEffect } from "react";

export default function HeaderScrollHandler() {
  useEffect(() => {
    const nav = document.querySelector("#header_desktop");

    const handleScroll = () => {
      if (!nav) return;

      if (window.scrollY > 50) {
        nav.classList.add("backdrop-blur-xl", "bg-[#001219]/80", "border-b", "border-white/5");

        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.remove("backdrop-blur-xl", "bg-[#001219]/80", "border-b", "border-white/5");

        nav.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
