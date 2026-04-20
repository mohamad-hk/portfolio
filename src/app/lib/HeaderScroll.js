"use client";
import { useEffect } from "react";

export default function HeaderScrollHandler() {
  useEffect(() => {
    const nav = document.querySelector("#header_desktop");

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!nav) return;

          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            nav.classList.add("backdrop-blur-md", "bg-accent");
            nav.classList.remove("bg-transparent", "shadow-none");
          } else if (currentScrollY < lastScrollY - 5) {
            nav.classList.add("bg-accent");
          }

          if (currentScrollY < 50) {
            nav.classList.remove("backdrop-blur-md", "shadow-md");
            nav.classList.add("bg-transparent", "bg-accent");
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
