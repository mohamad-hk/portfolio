import { LucideGithub, LucideLinkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Footer = async () => {
  const translated_content = await getTranslations("footer");

  return (
    <footer className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-[#001219]/80 px-6 py-6 backdrop-blur-md sm:flex-row sm:px-10">
      <div className="flex flex-col items-center gap-1 sm:items-start">
        <p className="text-sm text-white/70">
          {translated_content("description")}
        </p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Link
          href="https://github.com/mohamad-hk"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:border-primary/50 hover:text-primary"
          aria-label="GitHub"
        >
          <LucideGithub size={22} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/mohammad-hossein-karimi-3b5344297"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:border-primary/50 hover:text-primary"
          aria-label="LinkedIn"
        >
          <LucideLinkedin size={22} />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
