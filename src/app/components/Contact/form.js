const ContactUs = () => {
  return (
    <form className="w-[30%] mx-auto flex flex-col gap-4"  id="contact">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <input
          type="text"
          placeholder="Name"
          className="rounded-md bg-white/80 p-2 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-md bg-white/80 p-2 outline-none"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-md bg-white/80 p-2 outline-none"
      />
      <textarea
        placeholder="Enter your text"
        className="w-full rounded-md bg-white/80 p-2 outline-none"
        rows={10}
        cols={40}
        
      ></textarea>
      <button className="flex flex-row justify-center hover:cursor-pointer bg-button w-fit mx-auto rounded-lg p-2 text-white">
        Send Message
      </button>
    </form>
  );
};
export default ContactUs;
