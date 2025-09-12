const Career = () => {
  const experince_item = [
    {
      id: "1",
      title: "lorem lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia!",
    },
    {
      id: "2",
      title: "lorem lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia!",
    },
    
    {
      id: "3",
      title: "lorem lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia!",
    },
  ];
  return (
    <div className="flex flex-row justify-center gap-14 my-10">
      <div className="bg-gray-800 w-[5px] "></div>

      <div className="flex flex-col justify-center items-center gap-14">
        {experince_item.map((item) => {
          return (
            <div className="flex flex-col gap-10 w-[800px]" key={item.id}>
              <div className="flex flex-col gap-4 relative rounded-lg bg-yellow-200 px-4 py-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-justify leading-6">{item.description}</p>
                <div className=" flex flex-row items-center absolute -left-14 top-10">
                  <div className="w-[55px] h-[5px] bg-gray-500"></div>
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
