import ProjectsCard from "./ProjectCard";

const Projects = async ({ locale }) => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/projects?locale=${locale}`,
    {
      cache: "no-store",
    }
  );
  const project_data = await res.json();
  return <ProjectsCard project_data={project_data} locale={locale} />;
};
export default Projects;
