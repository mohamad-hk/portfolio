"use client";

import {
  LucideArrowRight,
  LucideCircleCheckBig,
  LucideTriangleAlert,
  Maximize2,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = ({ project_data, locale }) => {
  const translated_content = useTranslations("home");
  const [selectedProject, setSelectedProject] = useState(null);

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
    <>
      <div className="flex flex-col w-[92%] xl:w-[88%] mx-auto gap-y-20 sm:gap-y-14 lg:gap-y-24 mt-10 md:mt-12">
        {project_data?.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`project-card flex flex-col ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              } gap-8 xl:gap-10 2xl:gap-12 justify-center items-center`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(item)}
                className="group relative w-full xl:w-[52%] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2a] shadow-2xl shadow-black/20"
                aria-label={`${
                  locale === "fa" ? "نمایش دموی" : "View demo for"
                } ${item.project_name}`}
              >
                <video
                  src={item.project_demo}
                  autoPlay
                  loop
                  playsInline
                  muted
                  controls={false}
                  className="block h-auto w-full"
                />

                <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent p-4 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-lg bg-black/70 px-3 py-2 text-sm font-medium text-white backdrop-blur">
                    <Maximize2 size={16} />
                    {locale === "fa" ? "نمایش بزرگ" : "View demo"}
                  </span>
                </span>
              </button>

              <div className="flex w-full xl:w-[48%] flex-col gap-5 max-w-3xl">
                <h3 className="text-3xl md:text-xl font-semibold">
                  {item.project_name}
                </h3>

                <p className="text-justify leading-7 text-muted-foreground">
                  {item.project_description}
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-4 rounded-xl border border-white/10 bg-[#0d1b2a]/90 p-4 shadow-lg shadow-black/10">
                    <div className="mt-1 shrink-0">
                      <LucideTriangleAlert
                        size={24}
                        className="text-warning"
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-warning uppercase text-sm font-bold">
                        {translated_content("problem")}
                      </p>

                      <p className="leading-6 text-muted-foreground">
                        {item.project_problem}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 rounded-xl border border-white/10 bg-[#0d1b2a]/90 p-4 shadow-lg shadow-black/10">
                    <div className="mt-1 shrink-0">
                      <LucideCircleCheckBig
                        size={24}
                        className="text-success"
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-success uppercase text-sm font-bold">
                        {translated_content("solution")}
                      </p>

                      <p className="leading-6 text-muted-foreground">
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
                        className="rounded-lg border border-white/5 bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-[#0d1b2a]/80"
                      >
                        {item_technology.technology_name}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-row flex-wrap justify-center sm:justify-stretch gap-4">
                  <Link
                    href={item.project_link}
                    className="group inline-flex items-center gap-3 rounded-lg px-6 py-3 font-medium capitalize text-white ring-1 ring-muted-foreground/20 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:text-primary hover:ring-primary"
                  >
                    {translated_content("live website")}

                    <SquareArrowOutUpRight
                      size={20}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href={
                      locale === "fa"
                        ? `/fa/projects/${item.project_slug}`
                        : `/en/projects/${item.project_slug}`
                    }
                    className="group flex flex-row items-center gap-3 rounded-lg px-6 py-3 capitalize text-muted-foreground transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-[#0d1b2a] hover:text-white"
                  >
                    {translated_content("read case study")}
                    {locale === "en" ? (
                      <LucideArrowRight
                        size={20}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    ) : (
                      <LucideArrowRight
                        size={20}
                        className="rotate-180 transition-transform duration-200 group-hover:-translate-x-1"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.project_name}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2a]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <h3 className="text-base font-semibold sm:text-lg">
                {selectedProject.project_name}
              </h3>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={locale === "fa" ? "بستن" : "Close"}
              >
                <X size={20} />
              </button>
            </div>

            <video
              src={selectedProject.project_demo}
              autoPlay
              playsInline
              muted
              controls
              className="block max-h-[78vh] w-full bg-black object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
