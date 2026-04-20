import {
  LucideChartColumn,
  LucideCode,
  LucideContainer,
  LucideDatabase,
  LucideGitBranch,
  LucideGlobe,
  LucideLayers,
  LucidePalette,
  LucidePanelsTopLeft,
  LucideSearch,
  LucideServer,
  LucideShield,
  LucideTerminal,
  LucideWorkflow,
} from "lucide-react";

const Skills = () => {
  const front_end = [
    {
      id: "4",
      logo: "",
      name: "TypeScript",
      icon: (
        <LucideGlobe
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "5",
      logo: "",
      name: "React",
      icon: (
        <LucideCode
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "6",
      logo: "",
      name: "Next.js",
      icon: (
        <LucideCode
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "7",
      logo: "",
      name: "Tailwind CSS",
      icon: (
        <LucidePalette
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "9",
      logo: "",
      name: "HTML/CSS",
      icon: (
        <LucidePanelsTopLeft
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
  ];
  const Back_end = [
    {
      id: "1",
      logo: "",
      name: "Node.js",
      icon: (
        <LucideServer
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "2",
      logo: "",
      name: "Express",
      icon: (
        <LucideServer
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "4",
      logo: "",
      name: "Rest API",
      icon: (
        <LucideWorkflow
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "3",
      logo: "",
      name: "GraphQl",
      icon: (
        <LucideWorkflow
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "3",
      logo: "",
      name: "JWT Auth",
      icon: (
        <LucideShield
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
  ];
  const Database = [
    {
      id: "1",
      logo: "",
      name: "MongoDB",
      icon: (
        <LucideDatabase
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "2",
      logo: "",
      name: "PostgreSQL",
      icon: (
        <LucideDatabase
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "3",
      logo: "",
      name: "MySQL",
      icon: (
        <LucideDatabase
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
  ];
  const Miscellaneous = [
    {
      id: "1",
      logo: "",
      name: "Docker",
      icon: (
        <LucideContainer
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "2",
      logo: "",
      name: "Git",
      icon: (
        <LucideGitBranch
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "3",
      logo: "",
      name: "CI/CD",
      icon: (
        <LucideWorkflow
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "4",
      logo: "",
      name: "Linux",
      icon: (
        <LucideTerminal
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
  ];
  const Data_Seo = [
    {
      id: "1",
      logo: "",
      name: "Google Analytics",
      icon: (
        <LucideChartColumn
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "2",
      logo: "",
      name: "SEO optimization",
      icon: (
        <LucideSearch
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "3",
      logo: "",
      name: "zustand",
      icon: (
        <LucideLayers
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
    {
      id: "4",
      logo: "",
      name: "React query",
      icon: (
        <LucideLayers
          size={18}
          className="text-muted-foreground group-hover:text-primary"
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-secondary  px-20 py-32">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-[90%]">
        <div>
          <h2 className="text-md font-semibold  text-muted-foreground mb-0 uppercase">
            Frontend
          </h2>
          <div className="flex flex-col gap-2 p-2">
            {front_end.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-3 transition-all duration-200 ease-in-out group hover:bg-black p-2 rounded-lg "
                  key={index}
                >
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-md font-semibold  text-muted-foreground mb-0 uppercase">
            Back-end
          </h2>
          <div className="flex flex-col gap-2 p-2">
            {Back_end.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-3 transition-all duration-200 ease-in-out group hover:bg-black p-2 rounded-lg"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-md font-semibold  text-muted-foreground mb-0 uppercase">
            Database
          </h2>
          <div className="flex flex-col gap-2 p-2">
            {Database.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-3 transition-all duration-200 ease-in-out group hover:bg-black p-2 rounded-lg"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-md font-semibold  text-muted-foreground mb-0 uppercase">
            Miscellaneous
          </h2>
          <div className="flex flex-col gap-2 p-2">
            {Miscellaneous.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-3 transition-all duration-200 ease-in-out group hover:bg-black p-2 rounded-lg"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-md font-semibold  text-muted-foreground mb-0 uppercase">
            data & seo
          </h2>
          <div className="flex flex-col gap-2 p-2">
            {Data_Seo.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-3 transition-all duration-200 ease-in-out group hover:bg-black p-2 rounded-lg"
                  key={index}
                >
                  <div>{item.icon}</div>
                  <p>{item.name}</p>
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
