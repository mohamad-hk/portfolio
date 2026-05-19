"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const isFa = pathname.startsWith("/fa");

  const toggleLanguage = () => {
    router.push(isFa ? "/en" : "/fa");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-8 w-16 items-center rounded-full bg-zinc-700 transition-all duration-300"
    >
      <div className={`absolute top-0  ${isFa ? "left-0" : "right-0"}`} />

      <div className="z-10 flex w-1/2 justify-center hover:cursor-pointer  ">
        <span
          className={`text-sm font-bold   transition-colors duration-300 ${
            isFa
              ? "text-black h-8 w-[40px] rounded-full bg-white pt-1.5"
              : "text-white"
          }`}
        >
          FA
        </span>
      </div>

      <div className="z-10 flex w-1/2 justify-center hover:cursor-pointer">
        <span
          className={`text-sm font-bold  transition-colors duration-300 ${
            !isFa
              ? "text-black h-8 w-[40px] rounded-full bg-white pt-1.5"
              : "text-black"
          }`}
        >
          EN
        </span>
      </div>
    </button>
  );
}
