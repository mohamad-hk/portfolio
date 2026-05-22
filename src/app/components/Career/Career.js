import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import Experience from "./Experience";

const Career = async ({ locale }) => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/experience?locale=${locale}`,
    {
      next: {
        revalidate: 604800,
      },
    }
  );
  let project_data = await res.json();
  let experince_items = project_data.data;
  return (
    <div className="flex px-10 md:px-14 lg:px-20 items-stretch gap-3 sm:gap-2 md:gap-3 lg:gap-7">
      <div className="relative w-[5px] sm:w-[3px] bg-white self-stretch">
        <ChevronUp
          className="absolute -top-4 left-1/2 -translate-x-1/2"
          size={40}
        />

        <ChevronDown
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
          size={40}
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8 md:gap-10">
        {experince_items.map((item, index) => {
          return <Experience key={index} item={item} locale={locale} />;
        })}
      </div>
    </div>
  );
};
export default Career;
