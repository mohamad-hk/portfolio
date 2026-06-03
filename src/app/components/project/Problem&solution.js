"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const ProblemAndSolution = ({ secondaryResult }) => {
    const translated_content = useTranslations("project");

  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".problem-item, .solution-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "expo.out",

            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              end: "top 70%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-20 px-6 overflow-x-hidden">
      <div>
        <h2 className="font-display text-2xl font-bold mb-8 text-white">
          {translated_content("problem & solutions")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="flex flex-col gap-4">
            {secondaryResult?.p_d_problem?.map((item, index) => (
              <li
                key={index}
                className="problem-item  rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-red-400/30 hover:bg-slate-900/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
                    <AlertTriangle size={22} />
                  </div>

                  <p className="leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            {secondaryResult?.p_d_solution?.map((item, index) => (
              <li
                key={index}
                className="solution-item  rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-slate-900/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <CheckCircle2 size={22} />
                  </div>

                  <p className="leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemAndSolution;
