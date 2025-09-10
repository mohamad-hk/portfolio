import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
const Projects = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  let project_data = await res.json();
  project_data = project_data.items;

  return (
    <div className="flex flex-col w-[60%] mx-auto gap-6 my-10">
      {project_data.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex  mx-auto ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className={`bg-blue-200 p-4 max-w-[400px] flex flex-row justify-center items-center ${index % 2 === 0?"rounded-l-2xl":"rounded-r-2xl"} `}>
              <Image
                src={item.project_demo}
                width={400}
                height={400}
                alt="image not found"
                className="rounded-md"
              />
            </div>
            <div className={`flex flex-col gap-4 p-4 ${index % 2 === 0?"rounded-r-2xl":"rounded-l-2xl"} max-w-[500px] bg-[#98b5e4]`}>
              <h3 className="text-xl font-semibold">{item.project_name}</h3>
              <p className="text-justify leading-6">
                {item.project_description}
              </p>
              <div className="flex flex-row flex-wrap gap-2">
                {item.project_technologies.map((item_technology) => {
                  return (
                    <div
                      className="rounded-xl px-2 py-1 text-sm bg-gray-300 text-gray-700"
                      key={item_technology.id}
                    >
                      {item_technology.technology_name}
                    </div>
                  );
                })}
              </div>
              <Link href={item.project_link}>
                <TbExternalLink className="text-2xl text-gray-300" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
