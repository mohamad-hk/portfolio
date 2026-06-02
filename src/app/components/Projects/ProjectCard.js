"use client";

import {
  LucideArrowRight,
  LucideCircleCheckBig,
  LucideTriangleAlert,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = ({ project_data, locale }) => {
  const translated_content = useTranslations("home");

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col w-[90%] md:w-[90%] xl:w-[80%] mx-auto gap-y-20 sm:gap-y-10 lg:gap-y-20">
      {project_data?.data.map((item, index) => {
        return (
          <div
            key={index}
            className={`project-card flex flex-col ${
              index % 2 === 0
                ? "md:flex-row gap-10 justify-center items-center"
                : "md:flex-row-reverse gap-10 justify-center items-center"
            }`}
          >
            <video
              src={item.project_demo}
              autoPlay
              loop
              playsInline
              muted
              
              controls={false}
              className="w-full max-w-md pointer-events-none object-cover rounded-3xl aspect-video overflow-hidden"
            />

            <div className="flex flex-col gap-4 max-w-3xl">
              <h3 className="text-3xl md:text-xl font-semibold">
                {item.project_name}
              </h3>

              <p className="text-justify leading-6">
                {item.project_description}
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 bg-[#0d1b2a] rounded-lg p-2">
                  <div>
                    <LucideTriangleAlert size={24} className="text-warning" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-warning uppercase text-sm font-bold">
                      {translated_content("problem")}
                    </p>

                    <p className="text-muted-foreground">
                      {item.project_problem}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 bg-[#0d1b2a] rounded-lg p-2">
                  <div>
                    <LucideCircleCheckBig size={24} className="text-success" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-success uppercase text-sm font-bold">
                      {translated_content("solution")}
                    </p>

                    <p className="text-muted-foreground">
                      {item.project_solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row flex-wrap gap-2">
                {item.project_technologies.map((item_technology) => {
                  return (
                    <div
                      key={item_technology.id}
                      className="rounded-xl px-4 py-1 text-sm bg-secondary font-semibold text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-[#0d1b2a]/80"
                    >
                      {item_technology.technology_name}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-row flex-wrap justify-center sm:justify-stretch gap-4">
                <Link
                  href={item.project_link}
                  className="flex flex-row items-center gap-4 px-6 py-3 capitalize rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
                >
                  {translated_content("live website")}

                  <SquareArrowOutUpRight size={20} />
                </Link>

                <Link
                  href={
                    locale === "fa"
                      ? `/fa/projects/${item.project_slug}`
                      : `/en/projects/${item.project_slug}`
                  }
                  className="flex flex-row items-center gap-4 px-6 py-3 capitalize text-muted-foreground rounded-lg transition-all duration-200 ease-in-out hover:bg-[#0d1b2a] hover:text-white"
                >
                  {translated_content("read case study")}
                  {locale === "en" ? (
                    <LucideArrowRight size={20} />
                  ) : (
                    <LucideArrowRight size={20} className="rotate-180" />
                  )}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCard;
