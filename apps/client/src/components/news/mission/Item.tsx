import { IMissionNews } from "type";
import dayjs from "dayjs";
import { MISSION_LOCATION_MAP } from "./config";

interface IMissionItemProps {
  mission: IMissionNews;
  onClick: () => void;
}

const MissionItem = ({ mission, onClick }: IMissionItemProps) => {
  // date를 YYYY.MM.DD 형식으로 변환
  const formattedDate = dayjs(mission.date).format("YYYY.MM.DD");

  return (
    <div className="flex flex-col gap-3 border-b border-[#ECECEC] pb-4 sm:gap-4 sm:pb-6 md:gap-5 md:pb-8">
      <div className="flex items-start justify-between gap-3 sm:gap-4 md:gap-6">
        <div className="flex flex-1 flex-col gap-1.5 sm:gap-2 md:gap-2.5">
          <p className="text-xs font-light text-[#9B9B9B] sm:text-sm md:text-base">
            {formattedDate}
          </p>
          <h3 className="text-base font-bold text-[#222222] sm:text-lg md:text-xl lg:text-2xl">
            {mission.title}
          </h3>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <span className="rounded-md bg-[#F5F5F5] px-2.5 py-1 text-xs text-[#222222] sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base">
            {MISSION_LOCATION_MAP[mission.location]}
          </span>
        </div>
      </div>
      <button
        onClick={onClick}
        className="w-full rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm font-medium text-[#222222] transition-colors hover:bg-[#F9F9F9] sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg"
      >
        자세히 보기
      </button>
    </div>
  );
};

export default MissionItem;
