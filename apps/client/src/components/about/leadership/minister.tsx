import CustomImage from "@/components/customImage";
import { officerType, officerTypeMap } from "@/constants/innerMenus/about";
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
    <div className="flex w-full gap-4">
      <CustomImage
        src={img ?? "/images/profile.png"}
        alt={name}
        className="h-[80px] w-[80px] min-w-[80px]"
        imgClass="rounded-full object-[50%_0%]"
      />
      <div className="flex flex-col">
        <p className="font-medium text-[#464646]">
          {name} {officerTypeMap[officer]}
        </p>
        <p className="mb-2 whitespace-pre-wrap text-xs text-[#464646]">{greeting}</p>
        <p className="text-xs text-[#464646]/[.66]">{position} 담당</p>
      </div>
    </div>
  );
};

export default Minister;
