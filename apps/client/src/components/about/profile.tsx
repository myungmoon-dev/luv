import Image from "next/image";
import React from "react";

interface IProfileProps {
  name: string;
  description: string;
  image: string;
  alt?: string;
}

const Profile = ({ description, image, name, alt = "profile" }: IProfileProps) => {
  return (
    <div className="flex items-center gap-5">
      <Image src={image} alt={alt} width={120} height={160} />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
