"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ProblemAndSolution = ({ secondaryResult }) => {
  useEffect(() => {
    AOS.init();
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <section className="pb-20 px-6">
      <div className="">
        <h2 className="font-display text-2xl font-bold mb-6">
          Problem & Solutions
        </h2>
        <div className="grid grid-cols-2">
          <ul className="flex flex-col gap-4">
            {secondaryResult.p_d_problem.map((item, index) => {
              return (
                <li key={index}>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-aos="fade-right"
                  >
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-4">
            {secondaryResult.p_d_solution.map((item, index) => {
              return (
                <li key={index}>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-aos="fade-left"
                  >
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ProblemAndSolution;
