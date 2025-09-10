import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
const Projects = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  let project_data = await res.json();
  project_data = project_data.items;

  return (
    <div className="flex flex-col w-[90%] md:w-[90%] xl:w-[60%] mx-auto gap-y-6 my-10">
      {project_data.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col  mx-auto ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className={`bg-blue-200 p-4 md:max-w-[500px] flex flex-row justify-center items-center rounded-t-2xl md:rounded-t-none ${index % 2 === 0?"md:rounded-l-2xl":"md:rounded-r-2xl"} `}>
              <Image
                src={item.project_demo}
                width={400}
                height={400}
                alt="image not found"
                className="rounded-md"
              />
            </div>
            <div className={`flex flex-col gap-4 p-4 rounded-b-2xl  ${index % 2 === 0?"md:rounded-r-2xl md:rounded-bl-none":"md:rounded-l-2xl md:rounded-br-none"} max-w-[500px] bg-[#98b5e4]`}>
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
