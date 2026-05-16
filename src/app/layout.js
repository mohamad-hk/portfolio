import Background from "./components/ui/Background";
import Footer from "./container/footer";
import Header from "./container/header";
import "./globals.css";

export const metadata = {
  title: "Mohammad hossein karimi | full stack web developer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative text-white">
        <Background />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
