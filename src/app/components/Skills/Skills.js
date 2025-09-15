const Skills = () => {
  const front_end = [
    { id: "1", logo: "", name: "HTML5" },
    { id: "2", logo: "", name: "CSS3" },
    { id: "3", logo: "", name: "JavaScript" },
    { id: "4", logo: "", name: "TypeScript" },
    { id: "5", logo: "", name: "React" },
    { id: "6", logo: "", name: "Next.js" },
    { id: "7", logo: "", name: "Tailwind CSS" },
    { id: "8", logo: "", name: "zustand" },
    { id: "9", logo: "", name: "Responsive Design" },
  ];
  const Back_end = [
    { id: "1", logo: "", name: "MongoDB" },
    { id: "2", logo: "", name: "PostgreSQL" },
    { id: "3", logo: "", name: "MySQL" },
    { id: "4", logo: "", name: "Rest API" },
  ];
  const Miscellaneous = [
    { id: "1", logo: "", name: "Git" },
    { id: "2", logo: "", name: "Docker" },
    { id: "3", logo: "", name: "CI/CD" },
    { id: "4", logo: "", name: "SEO" },
    { id: "5", logo: "", name: "NPM/Yarn" },
  ];
  const AI = [
    { id: "1", logo: "", name: "Git" },
    { id: "2", logo: "", name: "Docker" },
    { id: "3", logo: "", name: "CI/CD" },
    { id: "4", logo: "", name: "SEO" },
    { id: "5", logo: "", name: "NPM/Yarn" },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-card shadow-md rounded-lg md:w-[250px]  w-[300px] ">
          <h2 className="text-xl font-semibold text-center mb-4">Frontend</h2>
          <div className="flex flex-col gap-4 p-4">
            {front_end.map((item) => {
              return (
                <div className="felx flex-row items-center gap-2">
                  {item.logo}
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-card shadow-md rounded-lg md:w-[250px] w-[300px] h-fit ">
          <h2 className="text-xl font-semibold text-center mb-4">
            Backend & Database
          </h2>
          <div className="flex flex-col gap-4 p-4">
            {Back_end.map((item) => {
              return (
                <div className="felx flex-row items-center gap-2">
                  {item.logo}
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-card shadow-md rounded-lg md:w-[250px] w-[300px] h-fit ">
          <h2 className="text-xl font-semibold text-center mb-4">
            Miscellaneous
          </h2>
          <div className="flex flex-col gap-4 p-4">
            {Miscellaneous.map((item) => {
              return (
                <div className="felx flex-row items-center gap-2">
                  {item.logo}
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-card shadow-md rounded-lg md:w-[250px] w-[300px] h-fit ">
          <h2 className="text-xl font-semibold text-center mb-4">AI</h2>
          <div className="flex flex-col gap-4 p-4">
            {AI.map((item) => {
              return (
                <div className="felx flex-row items-center gap-2">
                  {item.logo}
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skills;
