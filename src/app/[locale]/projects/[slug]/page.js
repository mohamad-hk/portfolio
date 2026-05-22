import { Gallery } from "@/app/components/project/Gallery";
import ProblemAndSolution from "@/app/components/project/Problem&solution";
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const input = await params;

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/projects/project-detail?slug=${input.slug}&locale=${input.locale}`,
    {
      next: {
        revalidate: 604800,
      },
    }
  );

  const project_data = await res.json();
  const primary_result = project_data.primary_result;
  const secondary_result = project_data.secondary_result;

  return {
    title: `${primary_result.project_name} | Mohamad Amin Karimi`,
    description: secondary_result.p_d_subtitle,

    robots: {
      index: false,
      follow: false,
    },
  };
}

const CaseStudyProject = async ({ params }) => {
  const input = await params;
  const translated_content = await getTranslations("project");
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/projects/project-detail?slug=${input.slug}&locale=${input.locale}`,
    {
      next: {
        revalidate: 604800,
      },
    }
  );
  const project_data = await res.json();
  const primary_result = project_data.primary_result;
  const secondary_result = project_data.secondary_result;
  const projects = ["hydrogenous", "irancsta", "privatekernel"];

  const currentIndex = projects.findIndex(
    (item) => item === primary_result.project_name.toLowerCase()
  );

  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  return (
    <div className=" w-[90%] mx-auto pt-24">
      <section className="pb-16 px-6">
        <div className="">
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
              className="flex flex-row items-center gap-4 px-6 py-3 rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all capitalize duration-200 ease-in-out hover:text-primary hover:ring-primary"
            >
              {translated_content("live website")}
              <SquareArrowOutUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className=" mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">
            {translated_content("background")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {secondary_result.p_d_background}
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className=" mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">
            {translated_content("tech stack")}
          </h2>
          <div className="flex flex-wrap gap-2">
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
      <ProblemAndSolution secondaryResult={secondary_result} />
      {secondary_result.p_d_improvments && (
        <section className="pb-20 px-6">
          <div className=" mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6">
              {translated_content("improvements")}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {secondary_result?.p_d_improvments.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border flex gap-3 items-start"
                >
                  <span className="text-success text-lg leading-none">✓</span>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-20 px-6">
        <div className=" mx-auto">
          <h2 className="font-display text-2xl font-bold mb-6">
            {translated_content("gallery")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border overflow-hidden "></div>
          </div>
          <Gallery Images={secondary_result.p_d_gallery} />
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className=" mx-auto flex justify-between items-center border-t border-border pt-8">
          {prevProject === undefined ? <div /> : ""}
          {prevProject !== undefined && (
            <Link
              href={`${
                input.locale === "fa"
                  ? `/fa/projects/${prevProject}`
                  : `en/projects/${prevProject}`
              }`}
              className="text-sm text-muted-foreground hover:transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={14} /> {prevProject}
            </Link>
          )}

          {nextProject !== undefined && (
            <Link
              href={`${
                input.locale === "fa"
                  ? `/fa/projects/${nextProject}`
                  : `en/projects/${nextProject}`
              }`}
              className="text-sm text-primary hover:transition-colors inline-flex items-center gap-2"
            >
              {nextProject} <ArrowRight size={14} />
            </Link>
          )}
          {nextProject === undefined ? <div /> : ""}
        </div>
      </section>
    </div>
  );
};
export default CaseStudyProject;
