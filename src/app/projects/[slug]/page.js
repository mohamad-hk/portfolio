import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
const CaseStudyProject = async ({ params }) => {
  const input = await params;
  const res = await fetch(
    `http://localhost:3000/api/projects/project-detail?slug=${input.slug}`
  );
  const project_data = await res.json();
  const project_detail_data = project_data.data;
  const primary_result = project_detail_data.primary_result;
  const secondary_result = project_detail_data.secondary_result;
  return (
    <div className="pt-24">
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* <Link
            to="/#projects"
            className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 mb-8"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link> */}

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {primary_result.project_name}
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
            {secondary_result.p_d_subtitle}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span>{secondary_result.p_d_role}</span>
            <span className="text-border">|</span>
            <span>{secondary_result.p_d_time}</span>
          </div>
          <div className="flex">
            <Link
              href={primary_result.project_link}
              className="flex flex-row items-center gap-4 px-6 py-3 rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
            >
              <p className="capitalize">live website</p>
              <SquareArrowOutUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            {secondary_result.p_d_background}
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">
            Problem & Solutions
          </h2>
          <div className="grid grid-cols-2">
            <ul className="flex flex-col gap-2">
              {secondary_result.p_d_problem.map((item, index) => {
                return (
                  <li key={index}>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-2">
              {secondary_result.p_d_solution.map((item, index) => {
                return (
                  <li key={index}>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-row gap-2">
            {primary_result.project_technologies.map((item_technology) => {
              return (
                <div
                  className="rounded-xl px-4 py-1 text-sm bg-secondary font-semibold text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-accent/80"
                  key={item_technology.id}
                >
                  {item_technology.technology_name}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">
            Outcomes & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* {project.outcomes.map((o, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-card border border-border flex gap-3 items-start"
              >
                <span className="text-success text-lg leading-none">✓</span>
                <p className="text-sm text-muted-foreground">{o}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border overflow-hidden "></div>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        {/* <div className="max-w-4xl mx-auto flex justify-between items-center border-t border-border pt-8">
          <Link
            to="/#projects"
            className="text-sm text-muted-foreground hover:transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="text-sm text-primary hover:transition-colors inline-flex items-center gap-2"
          >
            {nextProject.title} <ArrowRight size={14} />
          </Link>
        </div> */}
      </section>
    </div>
  );
};
export default CaseStudyProject;
