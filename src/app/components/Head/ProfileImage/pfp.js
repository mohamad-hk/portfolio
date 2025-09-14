import Image from "next/image"

const ProfileImage=()=>{

    return(
        <Image src="/images/me.jpg" className="mx-auto" width={400} height={400} alt="image not found"/>
    )
}
export default ProfileImage