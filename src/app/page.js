import AboutMe from "./components/About/aboutMe";
import Career from "./components/Career/Career";
import ContactUs from "./components/Contact/form";
import Head from "./components/Head/Head";
import Projects from "./components/Projects/project";
import Skills from "./components/Skills/Skills";
import BlurText from "./components/ui/BlurText";

export default function App() {
  return (
    <>
      <Head />
      <BlurText
        text="About me"
        delay={150}
        animateBy="letters"
        direction="top"
        
        className="text-2xl mb-8"
      />
      <AboutMe />

        <BlurText
        text="My Skills"
        delay={150}
        animateBy="letters"
        direction="top"
        
        className="text-2xl mb-8"
      />
      <Skills/>


        <BlurText
        text="My career"
        delay={150}
        animateBy="letters"
        direction="top"
        
        className="text-2xl mb-8"
      />
      <Career/>
      <BlurText
        text="My projects"
        delay={150}
        animateBy="letters"
        direction="top"
        
        className="text-2xl mb-8"
      />
      <Projects />
      <BlurText
        text="Get in touch"
        delay={150}
        animateBy="letters"
        direction="top"
        
        className="text-2xl mb-8"
      />
      <ContactUs />
    </>
  );
}
