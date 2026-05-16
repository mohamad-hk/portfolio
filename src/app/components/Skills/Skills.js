import Image from "next/image";

const Skills = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/skills`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="flex flex-col justify-center items-center  px-20 py-32">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-[90%]">
        {data.map((category) => (
          <div className="bg-secondary/90 p-4 rounded-xl" key={category.id}>
            <h2 className="text-md font-semibold text-muted-foreground mb-0 uppercase">
              {category.name}
            </h2>

            <div className="flex flex-col gap-2 p-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-row items-center gap-3 transition-all duration-200 ease-in-out group hover:bg-accent p-2 rounded-lg"
                >
                  {skill.image && (
                    <Image
                      src={`/images/icons/${skill.image}`}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}

                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
