import Description from "./Description/description";
// import ProfileImage from "./ProfileImage/pfp";

const Head = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-10 px-4 md:px-0 relative">
      <Description />
      {/* <ProfileImage /> */}
    </div>
  );
};
export default Head;
