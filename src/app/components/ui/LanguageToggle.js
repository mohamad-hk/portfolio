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
      className="relative flex h-8 w-18 items-center rounded-full bg-zinc-700 transition-all duration-300"
    >
      <div
        className={`absolute top-0 h-8 w-[40px] rounded-full bg-white transition-all duration-300 ${
          isFa ? "left-0" : "right-0"
        }`}
      />

      <div className="z-10 flex w-1/2 justify-center">
        <span
          className={`text-sm font-bold transition-colors duration-300 ${
            isFa ? "text-black" : "text-white"
          }`}
        >
          FA
        </span>
      </div>

      <div className="z-10 flex w-1/2 justify-center">
        <span
          className={`text-sm font-bold transition-colors duration-300 ${
            !isFa ? "text-black" : "text-black"
          }`}
        >
          EN
        </span>
      </div>
    </button>
  );
}