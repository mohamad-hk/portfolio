import Description from "./Description/description";
import MoreInfo from "./MoreInfo/MoreInfo";
import ProfileImage from "./ProfileImage/pfp";

const Head = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-10 px-4 md:px-0">
      <Description />
      <ProfileImage />
      <MoreInfo />
    </div>
  );
};
export default Head;
