import { getTranslations } from "next-intl/server";
import Description from "./Description/description";
import ProfileImage from "./ProfileImage/pfp";
import { LucideArrowDown, LucideFileText, LucideMail } from "lucide-react";
import Link from "next/link";

const Head = async ({ locale }) => {
  const translated_content = await getTranslations("home");

  return (
    <div className=" flex flex-col gap-10 mt-24 px-10 md:px-0 ">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        <Description translated_content={translated_content} />
        <ProfileImage />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <Link
          href={locale === "fa" ? "/fa#projects" : "/en/#projects"}
          className=" flex flex-row items-center gap-2 px-8 py-3 rounded-md text-black bg-primary transition-all duration-200 ease-in-out hover:brightness-110 hover:shadow-lg"
        >
          {translated_content("view projects")}
          <LucideArrowDown size={18} />
        </Link>
        <Link
          href={locale === "fa" ? "/fa#contact" : "/en/#contact"}
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-md font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideMail size={18} />
          {translated_content("contact")}
        </Link>
        <Link
          href="/resume.pdf"
          download="MohammadHosseinKarimi_CV.pdf"
          className=" flex flex-row items-center gap-2 px-4 py-3 font-medium text-muted-foreground transition-all duration-200 ease-in-out rounded-md hover:bg-accent hover:text-white"
        >
          <LucideFileText size={18} />
          {translated_content("resume")}
        </Link>
      </div>
    </div>
  );
};
export default Head;
