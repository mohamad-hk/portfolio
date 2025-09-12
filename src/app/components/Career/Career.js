import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const Career = async () => {
  const res = await fetch("http://localhost:3000/api/experience");
  let project_data = await res.json();
  let experince_items = project_data.items;
  return (
    <div className="flex flex-row justify-center gap-24 my-10">
      <div className="flex flex-col items-center">
        <FaChevronUp className="text-4xl" />
        <div className="bg-gray-800 w-[3px] h-full "></div>
        <FaChevronDown className="text-4xl" />
      </div>
      <div className="flex flex-col justify-center items-center gap-14">
        {experince_items.map((item) => {
          return (
            <div className="flex flex-col gap-10 w-[850px] " key={item.id}>
              <div className="flex flex-col gap-4 relative rounded-lg bg-yellow-200 px-4 py-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <h4 className="text-lg font-semibold">@{item.company}</h4>
                <ul className="px-8">
                  {item.description.map((item_description) => {
                    return (
                      <li className="mb-2 list-disc" key={item_description.id}>
                        {item_description.description}
                      </li>
                    );
                  })}
                </ul>
                <div className=" flex flex-col items-center absolute -left-28 top-10">
                  <p>{item.time}</p>
                  <div className="w-[110px] h-[3px] bg-gray-500"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Career;
