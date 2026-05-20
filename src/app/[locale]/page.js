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
    <main className=" flex flex-col gap-6">
      <Head locale={locale} />

      <BlurText
        text={translated_content("technicalStack")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
        id="stack"
      />
      <Skills locale={locale} />

      <BlurText
        text={translated_content("career")}
        delay={150}
        animateBy="words"
        direction="top"
        className="  text-2xl mb-8"
        id="experience"
      />
      <Career locale={locale} />
      <BlurText
        text={translated_content("projects")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
        id="projects"
      />
      <Projects locale={locale} />
      <BlurText
        text={translated_content("cta")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
        id="contact"
      />
      <ContactUs translated_content={translated_content} />
    </main>
  );
}
