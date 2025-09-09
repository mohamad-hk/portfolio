import CircularText from "../ui/CircularText";

const AboutMe = () => {
  return (
    <div className="flex flex-row  ">
      <div className="flex flex-row w-[90%] md:w-[800px] mx-auto relative">
      <CircularText
        text="ABOUT"
        onHover="slowDown"
        spinDuration={20}
        className="hidden md:block"
      />
      <div className="flex flex-col gap-4 md:w-[50%] mx-auto">

        <h2 className="text-2xl">About me</h2>
        <p className="text-justify leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim rerum a
          sapiente earum odio mollitia sequi voluptatem inventore, obcaecati
          cumque quisquam harum at! Assumenda cupiditate voluptate nisi quisquam
          voluptates deserunt doloremque voluptatum? Quam itaque ea eligendi,
          dolores corrupti et cupiditate dolorum mollitia, voluptatum nisi
          doloremque. Ad similique porro dolores enim nostrum nemo? Eaque
          voluptate, earum placeat veniam dignissimos odio nemo! Laudantium
          laborum laboriosam eius voluptatibus eveniet tempore reiciendis quas
          est repellendus mollitia consectetur nostrum ex et, nisi quasi?
          Accusamus quas quis totam asperiores soluta impedit vero, laborum amet
          blanditiis ipsa omnis maxime quasi nulla tempora at quisquam rerum,
          corrupti commodi.
        </p>
      </div>
      </div>
    </div>
  );
};
export default AboutMe;
