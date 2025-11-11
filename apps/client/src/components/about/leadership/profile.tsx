import { officerTypeMap } from "@/constants/innerMenus/about";
import { OfficerLabel } from "@/constants/innerMenus/types";
import CustomImage from "../../customImage";

interface IProfileProps {
  name: string;
  description?: string;
  image: string;
  alt: string;
  tabType: string;
  officer: OfficerLabel;
  className?: string;
  position?: string;
  greeting?: string;
}

const Profile = ({ description, image, name, alt, className, position, tabType, officer, greeting }: IProfileProps) => {
  return (
    <div className="flex w-full items-center gap-4 sm:gap-6">
      <CustomImage
        src={image ?? "/images/profile.png"}
        alt={name}
        className="h-[80px] w-[80px] min-w-[80px] sm:h-[100px] sm:w-[100px] sm:min-w-[100px] lg:h-[130px] lg:w-[130px] lg:min-w-[130px]"
        imgClass="rounded-full object-[50%_0%]"
      />
      <div className="flex flex-col">
        {position && <p className="text-[#001F54] sm:text-lg">{position}</p>}
        <p className="font-medium text-[#464646] sm:text-lg">
          {name} {officerTypeMap[officer]}
        </p>
      </div>
    </div>
  );
};

export default Profile;
