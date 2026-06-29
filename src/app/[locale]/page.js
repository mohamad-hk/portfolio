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
    <main className="flex flex-col">
      <Head locale={locale} />

      <section className="py-14 md:py-20">
        <BlurText
          text={translated_content("technicalStack")}
          delay={120}
          animateBy="words"
          direction="top"
          className="text-3xl font-semibold text-white"
          id="stack"
        />
        <div className="mt-8 md:mt-10">
          <Skills locale={locale} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <BlurText
          text={translated_content("career")}
          delay={120}
          animateBy="words"
          direction="top"
          className="text-3xl font-semibold text-white"
          id="experience"
        />
        <div className="mt-8 md:mt-10">
          <Career locale={locale} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <BlurText
          text={translated_content("projects")}
          delay={120}
          animateBy="words"
          direction="top"
          className="text-3xl font-semibold text-white"
          id="projects"
        />
          <Projects locale={locale} />
      </section>

      <section className="py-14 md:py-20">
        <BlurText
          text={translated_content("cta")}
          delay={120}
          animateBy="words"
          direction="top"
          className="text-3xl font-semibold text-white"
          id="contact"
        />
        <div className="mt-8 md:mt-10">
          <ContactUs translated_content={translated_content} />
        </div>
      </section>
    </main>
  );
}
