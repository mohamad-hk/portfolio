import Experience from "./Experience";

const Career = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/experience`, {
    cache: "no-store",
  });
  let project_data = await res.json();
  let experince_items = project_data.data;
  return (
    <div className="flex flex-row lg:gap-x-10 px-6 sm:px-20 md:px-40 py-10">
      <div className="flex flex-col justify-center items-center">
        {experince_items.map((item, index) => {
          return (
            <div className=" flex flex-row gap-10" key={index}>
              <div className="w-[0.2px] h-full bg-muted-foreground"></div>
              <Experience item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Career;
