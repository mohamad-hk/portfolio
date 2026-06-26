import { getTranslations } from "next-intl/server";
import Description from "./Description/description";
import ProfileImage from "./ProfileImage/pfp";
import { LucideArrowDown, LucideDownload, LucideMail } from "lucide-react";
import Link from "next/link";

const Head = async ({ locale }) => {
  const translated_content = await getTranslations("home");

  return (
    <div className="hero-intro flex flex-col gap-10 mt-24 px-10 md:px-0">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <Description translated_content={translated_content} />
        <div className="hero-profile">
          <ProfileImage />
        </div>
      </div>
      <div className="hero-actions flex flex-row flex-wrap items-center justify-center gap-4">
        <Link
          href={locale === "fa" ? "/fa#projects" : "/en/#projects"}
          className="group flex flex-row items-center gap-2 px-8 py-3 rounded-md text-black bg-primary transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
        >
          {translated_content("view projects")}
          <LucideArrowDown size={18} className="transition-transform duration-200 group-hover:translate-y-0.5" />
        </Link>
        <Link
          href={locale === "fa" ? "/fa#contact" : "/en/#contact"}
          className="group flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-md font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:text-primary hover:ring-primary"
        >
          <LucideMail size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          {translated_content("contact")}
        </Link>
        <Link
          href="/resume.pdf"
          download="MohammadHosseinKarimi_CV.pdf"
          className="group flex flex-row items-center gap-2 px-8 py-3 rounded-md bg-[#0d1b2a] text-white font-semibold ring-1 ring-primary/60 shadow-[0_0_24px_rgba(148,210,189,0.12)] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(148,210,189,0.28)] hover:ring-primary"
        >
          <LucideDownload size={18} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          {translated_content("resume")}
        </Link>
      </div>
    </div>
  );
};
export default Head;
