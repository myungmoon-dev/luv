import CustomImage from "@/components/customImage";
import QtTitle from "../title";

interface QtScheduleSectionProps {
  weekday: { id: string; label: string; text: string; img: string };
  weekend: { id: string; label: string; text: string; img: string };
  place: { id: string; label: string; text: string; img: string };
  description: string;
}

const QtScheduleSection = ({ weekday, weekend, description, place }: QtScheduleSectionProps) => {
  return (
    <div className="flex w-full max-w-screen-md flex-col justify-start gap-5">
      <QtTitle titleEn="SCHEDULE" titleKr="교육일정 및 장소" />
      <p className="font-semibold">{description}</p>
      <div className="grid w-full grid-cols-1 gap-1 md:grid-cols-2 md:grid-rows-2">
        <CustomImage
          alt="평일반 이미지"
          src={weekday.img}
          className="relative h-[200px] md:h-auto"
          imgClass="brightness-75"
        >
          <div className="absolute flex h-full w-full flex-col items-center justify-center text-white">
            <p className="font-SCoreDream text-2xl">{weekday.label}</p>
            <p className="text-lg font-bold">{weekday.text}</p>
          </div>
        </CustomImage>
        <CustomImage
          alt="장소 이미지"
          src={place.img}
          className="relative row-span-2 h-[200px] md:h-[300px]"
          imgClass="brightness-75"
        >
          <div className="absolute flex h-full w-full flex-col items-center justify-center text-white">
            <p className="font-SCoreDream text-2xl">{place.label}</p>
            <p className="text-lg font-bold">{place.text}</p>
          </div>
        </CustomImage>
        <CustomImage
          alt="주말반 이미지"
          src={weekend.img}
          className="relative h-[200px] md:h-auto"
          imgClass="brightness-75"
        >
          <div className="absolute flex h-full w-full flex-col items-center justify-center text-white">
            <p className="font-SCoreDream text-2xl">{weekend.label}</p>
            <p className="text-lg font-bold">{weekend.text}</p>
          </div>
        </CustomImage>
      </div>
    </div>
  );
};

export default QtScheduleSection;
