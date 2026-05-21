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
    <div className="relative px-0 md:px-17 lg:px-33 ">
      <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8 md:gap-10">
        {experince_items.map((item, index) => {
          return <Experience key={index} item={item} locale={locale} />;
        })}
      </div>

      <div
        className={`absolute top-0 h-full w-[2px] bg-white -z-10 ${
          locale === "fa"
            ? "right-6 sm:right-5 md:right-12 lg:right-24"
            : "left-[19px] sm:left-5 md:left-12 lg:left-24"
        }`}
      ></div>

      <ChevronUp
        className={`absolute -top-4 ${
          locale === "fa"
            ? "right-1 sm:right-0 md:right-7 lg:right-[77px]"
            : "left-0 sm:left-0 md:left-7 lg:left-[77px]"
        }`}
        size={40}
      />

      <ChevronDown
        className={`absolute -bottom-4 ${
          locale === "fa"
            ? "right-1 sm:right-0 md:right-7 lg:right-[77px]"
            : "left-0 sm:left-0 md:left-7 lg:left-[77px]"
        }`}
        size={40}
      />
    </div>
  );
};
export default Career;
