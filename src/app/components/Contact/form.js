import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-react";
import Link from "next/link";

const ContactUs = ({translated_content}) => {
  return (
    <section className="flex flex-col gap-4 items-center px-10 md:px-0">
      <p>{translated_content("cta-description")}</p>
      <div className="flex flex-row flex-wrap justify-center sm:justify-stretch gap-4 mb-6">
        <Link
          href="mailto:mhkarimi.dev@gmail.com"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideMail size={18} />
          mhkarimi.dev@gmail.com
        </Link>
        <Link
          href="https://github.com/mohamad-hk"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideGithub size={18} />
          github
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohammad-hossein-karimi-3b5344297"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideLinkedin size={18} />
          linkedin
        </Link>
      </div>
    </section>
  );
};
export default ContactUs;
