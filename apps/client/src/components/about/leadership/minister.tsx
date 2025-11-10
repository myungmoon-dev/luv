import CustomImage from "@/components/customImage";
import { officerTypeMap } from "@/constants/innerMenus/about";
import { OfficerLabel } from "@/constants/innerMenus/types";

interface IMinisterProps {
  name: string;
  greeting: string;
  img: string;
  position: string;
  officer: OfficerLabel;
}

const Minister = ({ name, greeting, img, position, officer }: IMinisterProps) => {
  return (
    <div className="flex w-full items-center gap-4 sm:gap-7 md:gap-12">
      <CustomImage
        src={img ?? "/images/profile.png"}
        alt={name}
        className="h-[80px] w-[80px] min-w-[80px] sm:h-[100px] sm:w-[100px] sm:min-w-[100px] md:h-[130px] md:w-[130px] md:min-w-[130px]"
        imgClass="rounded-full object-[50%_0%]"
      />
      <div className="flex flex-col">
        <p className="font-medium text-[#464646] sm:text-lg md:text-xl">
          {name} {officerTypeMap[officer]}
        </p>
        <p className="mb-2 whitespace-pre-wrap text-xs text-[#464646] sm:text-sm md:text-lg">{greeting}</p>
        <p className="text-xs text-[#464646]/[.66] md:text-base">{position} 담당</p>
      </div>
    </div>
  );
};

export default Minister;
