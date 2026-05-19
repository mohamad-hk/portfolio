"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ item,locale }) => {
  useEffect(() => {
    gsap.utils.toArray(".experience_animation").forEach((el) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "bottom 90%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col w-[80vw] sm:w-[78vw] md:w-[85vw] lg:w-[50vw] max-w-[850px] experience_animation relative pb-14">
      {locale === "fa" ? (
        <Dot className="absolute -right-15 text-primary -top-2 " size={40} />
      ) : (
        <Dot className="absolute -left-15 text-primary -top-2 " size={40} />
      )}
      <div className="flex flex-col  gap-1 relative rounded-lg ">
        <span className="text-medium text-muted-foreground">
          {item.experience_time}
        </span>
        <h3 className="text-lg md:text-xl font-semibold">
          {item.experience_title}
        </h3>
        <h4 className="text-md md:text-lg font-semibold text-primary">
          {item.experience_company}
        </h4>
        <ul className=" flex flex-col gap-2">
          {item.experience_description.map((item_description) => (
            <li
              className=" text-sm md:text-base flex flex-row items-center sm:items-end"
              key={item_description.id}
            >
              <Dot className="text-primary" size={16} />
              <p className="text-muted-foreground text-justify">
                {item_description.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
