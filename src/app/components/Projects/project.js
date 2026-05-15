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

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ project_data }) => {

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
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
                ? "md:flex-row gap-10 justify-center items-start"
                : "md:flex-row-reverse gap-10 justify-center items-start"
            }`}
          >
            <div className="flex flex-row justify-center items-center">
              <video
                src={item.project_demo}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="max-w-md pointer-events-none"
              />
            </div>

            <div className="flex flex-col gap-4 max-w-3xl">
              <h3 className="text-3xl md:text-xl font-semibold">
                {item.project_name}
              </h3>

              <p className="text-justify leading-6">
                {item.project_description}
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4 bg-accent rounded-lg p-2">
                  <div>
                    <LucideTriangleAlert size={24} className="text-warning" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-warning uppercase text-sm font-bold">
                      problem
                    </p>

                    <p className="text-muted-foreground">
                      {item.project_problem}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 bg-accent rounded-lg p-2">
                  <div>
                    <LucideCircleCheckBig
                      size={24}
                      className="text-success"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-success uppercase text-sm font-bold">
                      solution
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
                      className="rounded-xl px-4 py-1 text-sm bg-secondary font-semibold text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-accent/80"
                    >
                      {item_technology.technology_name}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-row gap-4">
                <Link
                  href={item.project_link}
                  className="flex flex-row items-center gap-4 px-6 py-3 rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
                >
                  <p className="capitalize">live website</p>

                  <SquareArrowOutUpRight size={20} />
                </Link>

                <Link
                  href={`/projects/${item.project_name}`}
                  className="flex flex-row items-center gap-4 px-6 py-3 text-muted-foreground rounded-lg transition-all duration-200 ease-in-out hover:bg-accent hover:text-white"
                >
                  <p className="capitalize">read case study</p>

                  <LucideArrowRight />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;