import TiltedCard from "../../ui/ProfileCard";

const ProfileImage = () => {
  return (
    <TiltedCard
      imageSrc="/images/personal-image.webp"
      altText="Mohammad hossein karimi"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={3}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={false}
    />
  );
};
export default ProfileImage;
