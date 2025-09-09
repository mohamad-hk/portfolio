import Footer from "./container/footer";
import Header from "./container/header";
import "./globals.css";

export const metadata = {
  title: "Mohammad hossein karimi | Developer Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"  sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-site">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
