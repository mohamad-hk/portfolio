import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import Experience from "./Experience";

const Career = async () => {
  const res = await fetch("http://localhost:3000/api/experience");
  let project_data = await res.json();
  let experince_items = project_data.items;
  return (
    <div className="flex flex-row justify-center lg:gap-x-28 my-10">
      <div className="flex flex-col items-center">
        <FaChevronUp className="text-4xl" />
        <div className="bg-gray-800 w-[3px] h-[160vh] sm:h-[150vh] md:h-[150vh] lg:h-[120vh] xl:h-[110vh]"></div>
        <FaChevronDown className="text-4xl" />
      </div>
      <div className="flex flex-col justify-center items-center gap-14">
        {experince_items.map((item) => {
          return <Experience item={item} />;
        })}
      </div>
    </div>
  );
};
export default Career;
