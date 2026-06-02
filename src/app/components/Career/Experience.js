"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ item, locale }) => {
  useEffect(() => {
    gsap.utils.toArray(".experience_animation").forEach((el) => {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        el,
        {
          y: isMobile ? 50 : 0,
          x: !isMobile ? (locale === "fa" ? 50 : -50) : 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "bottom 90%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [locale]);

  return (
    <div className="relative w-full max-w-[900px] rounded-lg bg-[#0d1b2a] p-4 sm:p-5 md:p-6 experience_animation overflow-hidden">
      {locale === "fa" ? (
        <Dot className="absolute -right-15 sm:-right-15 md:-right-16 lg:-right-20 top-0 text-primary" size={100} />
      ) : (
        <Dot className="absolute -left-16 sm:-left-15 md:-left-16 lg:-left-20 -top-2 text-primary" size={100} />
      )}
      <div className="flex flex-col gap-2 rounded-lg">
        <span className="text-sm sm:text-base text-muted-foreground">{item.experience_time}</span>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold">{item.experience_title}</h3>

        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary">{item.experience_company}</h4>

        <ul className="flex flex-col gap-2">
          {item.experience_description.map((item_description) => (
            <li className="flex flex-row items-start gap-1 text-sm sm:text-base" key={item_description.id}>
              <Dot className="mt-1 shrink-0 text-primary" size={28} />

              <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">{item_description.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
