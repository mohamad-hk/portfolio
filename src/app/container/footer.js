import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 px-6 py-4 bg-primary">
      <p>2025 | Developed️ by my self</p>
      <div className="flex flex-row items-center gap-4">

      <Link href="#">
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link href="#">
        <FaGithub className="text-2xl" />
      </Link>
      </div>
    </div>
  );
};
export default Footer;
