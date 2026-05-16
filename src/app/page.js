import Career from "./components/Career/Career";
import ContactUs from "./components/Contact/form";
import Head from "./components/Head/Head";
import Projects from "./components/Projects/project";
import Skills from "./components/Skills/Skills";
import BlurText from "./components/ui/BlurText";

export default async function App() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/projects`, {
    cache: "no-store",
  });
  const project_data = await res.json();
  return (
    <main className=" flex flex-col gap-6">
      <Head />

      <BlurText
        text="Technical Stack"
        delay={150}
        animateBy="letters"
        direction="top"
        className="text-2xl mb-8"
        id="stack"
      />
      <Skills />

      <BlurText
        text="My career"
        delay={150}
        animateBy="letters"
        direction="top"
        className="  text-2xl mb-8"
        id="experience"
      />
      <Career />
      <BlurText
        text="My projects"
        delay={150}
        animateBy="letters"
        direction="top"
        className="text-2xl mb-8"
        id="projects"
      />
      <Projects project_data={project_data} />
      <BlurText
        text="Get in touch"
        delay={150}
        animateBy="letters"
        direction="top"
        className="text-2xl mb-8"
        id="contact"
      />
      <ContactUs />
    </main>
  );
}
