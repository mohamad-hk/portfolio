import { LucideGithub, LucideLinkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Footer = async () => {
  const translated_content = await getTranslations("footer");

  return (
    <footer className="relative z-10 flex flex-row items-center justify-between gap-4 px-10 py-5 border-t border-white/10 bg-[#001219]/80 backdrop-blur-md">
      <p className="text-sm text-white/70">{translated_content("description")}</p>

      <div className="flex flex-row items-center gap-4">
        <Link href="#" className="text-white/70 transition hover:text-white">
          <LucideGithub size={22} />
        </Link>

        <Link href="#" className="text-white/70 transition hover:text-white">
          <LucideLinkedin size={22} />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
