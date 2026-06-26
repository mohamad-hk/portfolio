import Image from "next/image";

const getCategoryAccent = (categoryName = "") => {
  const normalizedName = categoryName.toLowerCase();

  if (normalizedName.includes("front") || normalizedName.includes("فرانت")) {
    return {
      "--tech-accent": "48, 171, 232",
      "--tech-accent-secondary": "34, 195, 142",
    };
  }

  if (normalizedName.includes("back") || normalizedName.includes("بک")) {
    return {
      "--tech-accent": "34, 195, 142",
      "--tech-accent-secondary": "244, 157, 37",
    };
  }

  if (
    normalizedName.includes("database") ||
    normalizedName.includes("data") ||
    normalizedName.includes("دیتا")
  ) {
    return {
      "--tech-accent": "244, 157, 37",
      "--tech-accent-secondary": "48, 171, 232",
    };
  }

  if (
    normalizedName.includes("tool") ||
    normalizedName.includes("dev") ||
    normalizedName.includes("ابزار")
  ) {
    return {
      "--tech-accent": "168, 85, 247",
      "--tech-accent-secondary": "48, 171, 232",
    };
  }

  return {
    "--tech-accent": "48, 171, 232",
    "--tech-accent-secondary": "168, 85, 247",
  };
};

const Skills = async ({ locale }) => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/skills?locale=${locale}`, {
    next: {
      revalidate: 604800,
    },
  });

  const data = await res.json();

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-[90%]">
        {data.map((category) => (
          <div
            className="tech-category"
            key={category.id}
            style={getCategoryAccent(category.name)}
          >
            <div className="tech-category-content">
              <h2 className="text-md font-semibold text-white mb-3 uppercase">{category.name}</h2>

              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex min-h-10 flex-row items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2 text-white/85 transition-all duration-200 ease-in-out hover:bg-secondary hover:text-white"
                  >
                    {skill.image && (
                      <Image src={`/images/icons/${skill.image}`} alt={skill.name} width={20} height={20} className="object-contain" />
                    )}

                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
