"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
const Projects = () => {
  const [project_data, setProjectData] = useState([]);
  const [section, setSection] = useState("website");
  const get_project_data = async () => {
    const res = await fetch("http://localhost:3000/api/projects");
    let project_data = await res.json();
    console.log(project_data.data[0].project_technlogoies);

    setProjectData(project_data.data);
  };
  useEffect(() => {
    get_project_data();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center  ">
        <div className="flex flex-row justify-center items-center  gap-4   px-2 py-2 w-fit border-2 rounded-full">
          <button
            className={`w-[100px]  rounded-full py-1 hover:cursor-pointer ${
              section === "website" ? "bg-button" : null
            }`}
            onClick={() => setSection("website")}
          >
            Website
          </button>
          <button
            className={`w-[100px]  rounded-full py-1 hover:cursor-pointer ${
              section === "ml" ? "bg-button" : null
            }`}
            onClick={() => setSection("ml")}
          >
            ML
          </button>
        </div>
      </div>
      <div
        className={`${
          section === "website" ? "flex" : "hidden"
        } flex-col w-[90%] md:w-[90%] xl:w-[60%] mx-auto gap-y-6 my-10`}
      >
        {project_data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col  mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`bg-blue-300 p-4 md:max-w-[500px] flex flex-row justify-center items-center rounded-t-2xl md:rounded-t-none ${
                  index % 2 === 0 ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
                } `}
              >
                <Image
                  src={item.project_demo}
                  width={400}
                  height={400}
                  alt="image not found"
                  className="rounded-md"
                />
              </div>
              <div
                className={`flex flex-col gap-4 p-4 rounded-b-2xl  ${
                  index % 2 === 0
                    ? "md:rounded-r-2xl md:rounded-bl-none"
                    : "md:rounded-l-2xl md:rounded-br-none"
                } max-w-[500px] bg-card`}
              >
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
      {/* <div className={`${section==="ml"?"flex":"hidden"} flex flex-col w-[90%] md:w-[90%] xl:w-[60%] mx-auto gap-y-6 my-10`}>

        {project_data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col  mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`bg-blue-200 p-4 md:max-w-[500px] flex flex-row justify-center items-center rounded-t-2xl md:rounded-t-none ${
                  index % 2 === 0 ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
                } `}
              >
                <Image
                  src={item.project_demo}
                  width={400}
                  height={400}
                  alt="image not found"
                  className="rounded-md"
                />
              </div>
              <div
                className={`flex flex-col gap-4 p-4 rounded-b-2xl  ${
                  index % 2 === 0
                    ? "md:rounded-r-2xl md:rounded-bl-none"
                    : "md:rounded-l-2xl md:rounded-br-none"
                } max-w-[500px] bg-[#98b5e4]`}
              >
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
      </div> */}
    </>
  );
};

export default Projects;
