import Image from "next/image";
import SectionCard from "../home/sectionCard";
import { Icon } from "ui";

interface IEducationIntroductionProps {
  image: string;
  title: string;
  words: string;
  bible: string;
  target: string;
  time: string;
  place: string;
  minister: string;
}

const EducationIntroduction = ({
  bible,
  minister,
  place,
  target,
  time,
  title,
  words,
  image,
}: IEducationIntroductionProps) => {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-14">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="relative h-[200px] w-full shadow-lg sm:h-[230px] lg:h-[300px]">
          <Image src={image} className="rounded-lg object-cover shadow-2xl" alt={title} fill />
        </div>
        <div className="flex flex-col items-center justify-center gap-7 sm:items-stretch">
          <h1 className="border-b-[1px] border-gray-300 pb-4 text-xl font-bold sm:text-2xl">{title}</h1>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-700 sm:text-base">{words}</p>
            <p className="text-sm text-gray-700 sm:text-base">{bible}</p>
          </div>
        </div>
      </div>
      {/* icons */}
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
          <div className="flex flex-col items-center justify-center gap-2">
            <SectionCard
              className="h-[100px] w-[110px] rounded-3xl bg-pink-300 pb-2 shadow-lg duration-700 hover:bg-pink-200"
              text="대상"
              icon={
                <Icon
                  name="CircleHeart"
                  size="xl"
                  backgroundColor="white"
                  strokeColor="white"
                  cursor="ui-cursor-pointer"
                />
              }
            />
            <p className="w-1/2 border-t-[1px] border-gray-300 pt-2 text-center text-sm text-gray-500 sm:text-base">
              {target}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <SectionCard
              className="h-[100px] w-[110px] rounded-3xl bg-pink-300 shadow-lg duration-700 hover:bg-pink-200"
              text="예배시간"
              icon={
                <Icon name="Clock" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />
              }
            />
            <p className="w-1/2 border-t-[1px] border-gray-300 pt-2 text-center text-sm text-gray-500 sm:text-base">
              {time}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <SectionCard
              className="h-[100px] w-[110px] rounded-3xl bg-pink-300 shadow-lg duration-700 hover:bg-pink-200"
              text="예배장소"
              icon={
                <Icon name="Map" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />
              }
            />
            <p className="w-1/2 border-t-[1px] border-gray-300 pt-2 text-center text-sm text-gray-500 sm:text-base">
              {place}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <SectionCard
              className="h-[100px] w-[110px] rounded-3xl bg-pink-300 shadow-lg duration-700 hover:bg-pink-200"
              text="섬기는 이"
              icon={
                <Icon name="User" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />
              }
            />
            <p className="w-1/2 border-t-[1px] border-gray-300 pt-2 text-center text-sm text-gray-500 sm:text-base">
              {minister}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationIntroduction;
