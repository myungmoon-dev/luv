import useMissionNewsStore from "@/store/News/mission";
import { MissionLocation } from "type";
import { cn } from "ui";
import { MISSION_LOCATION_MAP } from "./config";

interface ILocationMenu {
  label: (typeof MISSION_LOCATION_MAP)[MissionLocation | "all"];
  value: MissionLocation | "all";
}

const LOCATION_LIST: ILocationMenu[] = [
  { label: MISSION_LOCATION_MAP.all, value: "all" },
  { label: MISSION_LOCATION_MAP.bangladesh, value: "bangladesh" },
  { label: MISSION_LOCATION_MAP.bulgaria, value: "bulgaria" },
  { label: MISSION_LOCATION_MAP.uk, value: "uk" },
  { label: MISSION_LOCATION_MAP.uganda, value: "uganda" },
  { label: MISSION_LOCATION_MAP.indiaThailand, value: "indiaThailand" },
];

const MissionNewsFilter = () => {
  const [selectedLocation, setSelectedLocation] = useMissionNewsStore((state) => [
    state.selectedLocation,
    state.setSelectedLocation,
  ]);

  const handleClickLocation = (value: MissionLocation | "all") => {
    setSelectedLocation(value);
  };

  return (
    <div className="flex gap-2.5 overflow-x-scroll px-4 sm:px-7 md:gap-5 md:px-20 lg:justify-center">
      {LOCATION_LIST.map((location) => (
        <div
          onClick={() => handleClickLocation(location.value)}
          key={location.value}
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 sm:px-5 sm:py-2.5",
            "transition-colors whitespace-nowrap",
            selectedLocation === location.value
              ? "border-[#001F54] bg-[#001F54] text-white"
              : "border-[#ECECEC] bg-white text-[#666666] hover:border-[#001F54] hover:bg-[#001F54]/5"
          )}
        >
          <p
            className={cn(
              "text-xs font-medium sm:text-base md:text-lg",
            )}
          >
            {location.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MissionNewsFilter;

