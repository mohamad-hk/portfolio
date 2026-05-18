import { LucideGithub, LucideLinkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const Footer = async () => {
  const translated_content = await getTranslations("footer");
  return (
    <div className="flex flex-row items-center justify-between gap-2 px-10 py-4 border-t-1 border-muted-foreground">
      {/* <p>2026 built with precisoin</p> */}
      <p> {translated_content("description")}</p>
      <div className="flex flex-row items-center gap-4">
        <Link href="#">
          <LucideGithub className="text-2xl" />
        </Link>
        <Link href="#">
          <LucideLinkedin className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
