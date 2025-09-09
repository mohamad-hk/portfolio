import Link from "next/link";

const Description = () => {
  return (
    <div className=" flex flex-col gap-6">
      <p className="text-6xl">Hello.</p>
      <p className="text-md"> I'am Mohamamd hossein karimi</p>
      <p>Web developer</p>
      <Link href="#">Downlaod CV</Link>
    </div>
  );
};
export default Description;
