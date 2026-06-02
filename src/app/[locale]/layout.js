import Footer from "@/app/container/footer";
import Header from "@/app/container/header";
import "@/app/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { enFont, faFont } from "@/app/fonts";
import DotGrid from "../components/ui/Background";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: locale === "fa" ? "محمدحسین کریمی | توسعه دهنده فول استک" : "Mohammad Hossein Karimi | Full Stack Web Developer",

    description:
      locale === "fa"
        ? "محمدحسین کریمی توسعه دهنده فول استک در ایران است که روی طراحی و توسعه وب اپلیکیشن های مدرن، سریع و مقیاس پذیر کار می کند."
        : "Mohammad Hossein Karimi is a Full Stack Web Developer building modern, fast, and scalable web applications.",

    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}
export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} className={`${enFont.variable} ${faFont.variable}`}>
      <body
        className={`relative min-h-screen overflow-x-hidden text-white bg-[#001219] ${
          locale === "en" ? "[font-family:var(--font-en)]" : "[font-family:var(--font-fa)]"
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
            <DotGrid
              dotSize={3}
              gap={55}
              baseColor="#002B3D"
              activeColor="#5227FF"
              proximity={100}
              shockRadius={200}
              shockStrength={0}
              resistance={300}
              returnDuration={1}
            />
          </div>

          <div className="relative z-10">
            <Header locale={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
