import Career from "@/app/components/Career/Career";
import ContactUs from "@/app/components/Contact/form";
import Head from "@/app/components/Head/Head";
import Projects from "@/app/components/Projects/Projects";
import Skills from "@/app/components/Skills/Skills";
import BlurText from "@/app/components/ui/BlurText";
import { getTranslations } from "next-intl/server";

export default async function App({ params }) {
  const { locale } = await params;
  const translated_content = await getTranslations("home");
  return (
    <main className=" flex flex-col gap-10">
      <Head locale={locale} />

      <BlurText
        text={translated_content("technicalStack")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl"
        id="stack"
      />
      <Skills locale={locale} />

      <BlurText
        text={translated_content("career")}
        delay={150}
        animateBy="words"
        direction="top"
        className="  text-2xl"
        id="experience"
      />
      <Career locale={locale} />
      <BlurText
        text={translated_content("projects")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl"
        id="projects"
      />
      <Projects locale={locale} />
      <BlurText
        text={translated_content("cta")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl"
        id="contact"
      />
      <ContactUs translated_content={translated_content} />
    </main>
  );
}
