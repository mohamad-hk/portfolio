import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="text-4xl md:text-5xl font-semibold capitalize"> let's build something</h2>
      <p className=" text-center text-muted-foreground text-xl">Open to full-time roles, contract work, and texhnical consulting</p>
      {/* <form
        className=" w-[90%] sm:w-[80%] md:w-[600px] mx-auto flex flex-col gap-4 bg-[#e6e6e6] p-4 rounded-md"
        id="contact"
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md bg-white/80 p-2 outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-md bg-white/80 p-2 outline-none w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md bg-white/80 p-2 outline-none"
        />
        <textarea
          placeholder="Enter your text"
          className="w-full rounded-md bg-white/80 p-2 outline-none resize-none"
          rows={5}
          cols={40}
        ></textarea>
        <button className="flex flex-row justify-center hover:cursor-pointer bg-button w-fit mx-auto rounded-lg p-2 text-white">
          Send Message
        </button>
      </form> */}
      <div className="flex flex-row flex-wrap gap-4 mb-6">
        <Link
          href="#"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideMail size={18} />
          mhkarimi.dev@gmail.com
        </Link>
        <Link
          href="#"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideGithub size={18} />
          github
        </Link>
        <Link
          href="#"
          className=" flex flex-row items-center gap-2 px-8 py-3 bg-black rounded-lg font-medium ring-muted-foreground/20 ring-1 transition-all duration-200 ease-in-out hover:text-primary hover:ring-primary"
        >
          <LucideLinkedin size={18} />
          linkedin
        </Link>
      </div>
    </section>
  );
};
export default ContactUs;
