import { pastorTypes } from "@/constants/innerMenus/about";
import Image from "next/image";
import React from "react";

interface IProfileProps {
  name: string;
  description?: string;
  image: string;
  alt: string;
  type: string;
  className?: string;
  position?: string;
}

const Profile = ({ description, image, name, alt, className, position, type }: IProfileProps) => {
  return (
    <div className={`flex items-start justify-center gap-10 pb-5 ${className}`}>
      <div className="relative flex h-[250px] w-[200px] items-center justify-center overflow-hidden rounded-xl shadow-2xl ">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="flex max-w-lg flex-grow flex-col gap-5">
        <div className="flex items-center gap-3 border-b-[1px] border-gray-300 pb-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-xl font-[500]">{pastorTypes.filter((pastor) => pastor.label === type)[0].type}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>{position}</p>
          {position && (
            <div className="flex items-center gap-2">
              <p className="font-bold">부임</p>
              <p className="text-gray-800">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
