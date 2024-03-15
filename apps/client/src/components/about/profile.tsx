import Image from "next/image";
import React from "react";

interface IProfileProps {
  index: number;
  name: string;
  description: string;
  image: string;
  alt: string;
  className?: string;
  position: string;
}

const Profile = ({ description, image, name, alt, className, position, index }: IProfileProps) => {
  return (
    <div className={`flex items-start gap-20 border-b-[1px] border-gray-300 pb-5 ${className}`}>
      <div className="relative flex h-[250px] w-[200px] items-center justify-center overflow-hidden rounded-xl shadow-2xl ">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-[#892122]">{name}</h2>
        <div className="flex flex-col gap-5">
          <p className="font-semibold">{position}</p>
          {index > 1 ? (
            <div className="flex items-center gap-2">
              <p className="rounded-md bg-[#892122] px-2 py-1 font-bold text-white">부임</p>
              <p className="text-gray-800">{description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
