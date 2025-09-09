import Description from "./Description/description"
import MoreInfo from "./MoreInfo/MoreInfo"
import ProfileImage from "./ProfileImage/pfp"

const Head=()=>{

    return(
        <div className="flex flex-row justify-center gap-10">
        <Description/>
        <ProfileImage/>
        <MoreInfo/>
        </div>
    )
}
export default Head