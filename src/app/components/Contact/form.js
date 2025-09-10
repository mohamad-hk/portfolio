const ContactUs = () => {
  return (
    <form className=" w-[90%] sm:w-[80%] md:w-[600px] mx-auto flex flex-col gap-4 bg-[#e6e6e6] p-4 rounded-md mb-10"  id="contact">
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
    </form>
  );
};
export default ContactUs;
