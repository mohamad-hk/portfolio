"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ item }) => {
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
    <div className="flex flex-col gap-10 w-[80vw] sm:w-[78vw] md:w-[85vw] lg:w-[80vw] max-w-[850px] experience_animation">
      <div className="flex flex-col gap-4 relative rounded-lg bg-yellow-200 px-4 py-2 ">
        <h3 className="text-lg md:text-xl font-semibold pt-10 lg:pt-0">
          {item.title}
        </h3>
        <h4 className="text-md md:text-lg font-semibold">@{item.company}</h4>
        <ul className="px-8">
          {item.description.map((item_description) => (
            <li
              className="mb-2 list-disc text-sm md:text-base"
              key={item_description.id}
            >
              {item_description.description}
            </li>
          ))}
        </ul>
        <div className=" flex flex-row lg:flex-col items-center gap-x-6  absolute -left-7 lg:-left-32 top-4">
          <div className="w-[20px] h-[20px] bg-gray-500 rounded-full  lg:hidden"></div>
          <span className="text-lg font-bold">{item.time}</span>
          <div className="w-[110px] md:w-[127px] h-[3px] bg-gray-500 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
