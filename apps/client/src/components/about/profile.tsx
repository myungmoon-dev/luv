import { officerType } from "@/constants/innerMenus/about";
import React from "react";
import CustomImage from "../customImage";

interface IProfileProps {
  name: string;
  description?: string;
  image: string;
  alt: string;
  tabType: string;
  officer: string;
  className?: string;
  position?: string;
}

const Profile = ({ description, image, name, alt, className, position, tabType, officer }: IProfileProps) => {
  return (
    <div className="relative flex w-full items-center justify-around md:gap-5">
      <div className="z-[1] flex flex-col justify-center gap-3">
        <h1 className="font-SCoreDream text-2xl text-blue-600">
          {name} {officerType.filter((staff) => staff.label === officer)[0].type}
        </h1>
        <p className="font-semibold">{description}</p>
        <p className="whitespace-pre-wrap break-keep text-xs md:text-sm">{position}</p>
      </div>
      <CustomImage
        src={image ?? "/images/profile.png"}
        alt={alt}
        className="z-[1] h-[200px] w-[150px]"
        imgClass="object-[50%_0%]"
        quality={30}
      />
      <div className="absolute h-full w-[190px] rounded-full bg-gray-200 md:w-[200px]" />
    </div>
  );
};

export default Profile;
