const Description = ({ translated_content }) => {
  return (
    <div className=" flex flex-col  ">
      <p className="text-lg font-bold uppercase text-primary ">
        {translated_content("intro")}
      </p>
      <p className="capitalize text-4xl lg:text-6xl leading-14 md:leading-20 break-words w-[80%]">
        {translated_content("fullname")}
      </p>
      <div>
        <p className="text-xl text-muted-foreground">
          {translated_content("subintro")}
        </p>
      </div>
    </div>
  );
};
export default Description;
