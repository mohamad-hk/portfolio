import localFont from "next/font/local";

export const enFont = localFont({
  src: "../fonts/Manrope.woff2",
  variable: "--font-en",
  display: "swap",
});

export const faFont = localFont({
  src: "../fonts/Estedad.woff2",
  variable: "--font-fa",
  display: "swap",
});
