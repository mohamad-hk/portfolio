import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
const Header = () => {
  return (
    <div className=" flex flex-row justify-between items-center md:grid md:grid-cols-[100px_minmax(500px,1fr)] py-2 px-6 mb-4 bg-primary">
      <img src="/images/logo.png" alt="image not found" className="w-[100px] h-[30px]" />

      <nav className=" hidden md:flex  flex-row items-center gap-10 place-self-center">
        <Link href="#">About</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Career</Link>
        <Link href="#">Contact</Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild className="hover:cursor-pointer md:hidden">
          <IoMenuOutline className="text-2xl" />
        </SheetTrigger>
        <SheetContent className="p-2 pt-10">
          <SheetTrigger asChild>
            <Link href="#">About</Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link href="#">Projects</Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link href="#">Career</Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link href="#">Contact</Link>
          </SheetTrigger>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Header;
