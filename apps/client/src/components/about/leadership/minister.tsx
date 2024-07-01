import CustomImage from "@/components/customImage";
import { officerType } from "@/constants/innerMenus/about";

interface IMinisterProps {
  name: string;
  greeting: string;
  img: string;
  position: string;
  officer: string;
}

const Minister = ({ name, greeting, img, position, officer }: IMinisterProps) => {
  return (
    <div className="relative flex w-full items-center justify-center gap-3 md:gap-5">
      <div className="flex flex-col gap-3 md:w-1/3 2xl:w-1/4">
        <div className="flex items-center gap-1 border-b-[1px] border-gray-300 pb-[2px] 2xl:pb-2">
          <p className="font-SCoreDream text-xl md:text-2xl 2xl:text-3xl">
            {name} {officerType.filter((staff) => staff.label === officer)[0].type}
          </p>
        </div>
        <p className="break-keep text-sm md:text-base">{greeting}</p>
        <div className="flex flex-col gap-1">
          <p className="w-fit rounded-md bg-blue-600 p-1 px-2 text-sm font-bold text-white">담당사역</p>
          <p className="whitespace-pre-wrap break-keep text-xs md:text-sm 2xl:text-base">{position}</p>
        </div>
      </div>
      <div className="flex justify-center rounded-md bg-blue-700 px-2 pt-5 shadow-lg md:w-2/5 2xl:w-1/4">
        <CustomImage
          src={img ?? "/images/profile.png"}
          alt={name}
          className="z-[1] h-[200px] w-[170px] bg-blue-700 lg:h-[230px] lg:w-[200px] 2xl:h-[250px]"
          imgClass="object-[50%_0%] px-1"
        />
      </div>
    </div>
  );
};

export default Minister;
