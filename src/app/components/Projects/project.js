import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
const Projects = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  let project_data = await res.json();
  project_data=project_data.items
  return project_data.map((item, index) => {
    return (
      <div
        className={` flex ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}
      >
        <div className="bg-blue-200 p-4">
          {/* <Image
            src={item.project_image}
            width={300}
            height={400}
            alt="image not found"
            className="rounded-md"
          /> */}
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-xl font-semibold">{item.project_name}</h3>
          <p className="text-justify leading-6">{item.project_description}</p>
          <div className="flex flex-row flex-wrap gap-2">
            {item.technologies.map(
              (item_technology, index_technology) => {
                return (
                  <div className="rounded-xl px-2 py-1" key={index_technology}>
                    {item_technology.technology_name}
                  </div>
                );
              }
            )}
          </div>
          {/* <Link href={item.project_link}>
            <TbExternalLink />
          </Link> */}
        </div>
      </div>
    );
  });
};
export default Projects;
