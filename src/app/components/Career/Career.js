import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const Career = () => {
  const experince_items = [
    {
      id: "1",
      time: "2025-present",
      title: "Founder & Full-Stack Developer",
      company: "Personal Project",
      description: [
        {
          id: "1",
          description:
            "Built an automated blog platform focused on AI and cybersecurity using Next.js (front-end & back-end)",
        },
        {
          id: "2",
          description:
            "Integrated AI-driven content generation (via n8n pipeline, developed in collaboration).",
        },
        {
          id: "3",
          description:
            "Developed a URL shortener tool to optimize content sharing on Twitter and other platforms.",
        },
        {
          id: "4",
          description:
            "Automated publishing pipeline with daily posts and weekly/monthly reports.",
        },
      ],
    },
    {
      id: "2",
      time: "2025",
      title: "Multi-City Weather Analyzer",
      company: "Personal Project",
      description: [
        {
          id: "1",
          description:
            "Analyzed 5-year weather data from Tehran, Qom, and Rasht using Python (Pandas, NumPy)",
        },
        {
          id: "2",
          description:
            "Identified precipitation trends and intercity delay patterns",
        },
        {
          id: "3",
          description: "Visualized results with Matplotlib and Seaborn",
        },
      ],
    },
    {
      id: "3",
      time: "2024",
      title: "Front-End Developer",
      company: "Behrank",
      description: [
        {
          id: "1",
          description:
            "Developed 14+ SEO-optimized, responsive pages with Elementor and custom CSS",
        },
        {
          id: "2",
          description:
            "Collaborated with design team on idesign3d website for responsive UI and SEO improvements",
        },
        {
          id: "3",
          description:
            "Improved UX and purchase flow with optimized component structure and clean architecture",
        },
      ],
    },

    {
      id: "4",
      time: "2023 – Present",
      title: "Front-End Developer",
      company: "Hydrogenous",
      description: [
        {
          id: "1",
          description:
            "Migrated entire platform from legacy PHP to modern Next.js + PostgreSQL architecture",
        },
        {
          id: "2",
          description:
            "Built and maintained user, admin, and client panels with JWT authentication and Zustand",
        },
        {
          id: "3",
          description:
            "Improved UX and purchase flow with optimized component structure and clean architecture",
        },
      ],
    },
  ];
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
                  <div className="w-[110px] h-[5px] bg-gray-500"></div>
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
