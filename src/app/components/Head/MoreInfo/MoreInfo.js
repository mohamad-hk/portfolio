import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

const MoreInfo = () => {
  return (
    <div className="w-[300px] text-justify">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione
        est sit, unde molestiae tempore numquam, nihil enim ipsam earum atque
        incidunt at explicabo maiores suscipit magni! Sunt aspernatur voluptas
        doloribus saepe a earum provident voluptatum ut nulla? Cupiditate iste
        consectetur ea. Quis dolorum, optio sit accusamus sapiente adipisci
        dolor!
      </p>
      <div className="flex flex-row items-center gap-4">
        <Link href="#contact">Let's talk</Link>
        <LuMoveRight />
      </div>
    </div>
  );
};
export default MoreInfo;
