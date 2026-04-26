import { LucideArrowDown, LucideFileText, LucideMail } from "lucide-react";
import Link from "next/link";

const Description = () => {
  return (
    <div className=" flex flex-col items-center gap-6 mt-32 mb-8 ">
      <p className="text-lg font-bold uppercase text-primary ">
        Front-End Engineer
      </p>
      <p className="capitalize text-4xl lg:text-6xl text-center">
        Mohammad hossein karimi
      </p>
      <div className=" w-[80%] md:w-[50%] mx-auto">
        <p className="text-xl text-center text-muted-foreground">
          I build fast, scalable, and production-ready web applications using
          Next.js and modern full-stack architecture. Specialized in
          transforming legacy systems into high-performance platforms with
          optimized UX and clean, maintainable code.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <Link
          href="#"
          className=" flex flex-row items-center gap-2 px-8 py-3 rounded-md text-black bg-primary transition-all duration-200 ease-in-out hover:brightness-110 hover:shadow-lg"
        >
          View Projects
          <LucideArrowDown size={18} />
        </Link>
        <Link
          href="#"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-md font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideMail size={18} />
          Contact
        </Link>
        <Link
          href="/resume.pdf"
          download="MohammadHosseinKarimi_CV.pdf"
          className=" flex flex-row items-center gap-2 px-4 py-3 font-medium text-muted-foreground transition-all duration-200 ease-in-out rounded-md hover:bg-accent hover:text-white"
        >
          <LucideFileText size={18} />
          Resume
        </Link>
      </div>
    </div>
  );
};
export default Description;
