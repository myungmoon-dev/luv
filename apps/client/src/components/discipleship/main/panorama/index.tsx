import AboutHeaderSection from "@/components/about/section/header";
import { useState } from "react";
import PanoramaOutlineContent from "./contents/outline";
import PanoramaTargetContent from "./contents/target";
import PanoramaDateContent from "./contents/date";
import PanoramaTimePlaceContent from "./contents/timePlace";
import DiscipleshipTabBar from "../../tabs/tabBar";

const PANORAMA_DATA = [
  {
    label: "교육개요",
    content: <PanoramaOutlineContent />,
  },
  {
    label: "교육대상",
    content: <PanoramaTargetContent />,
  },
  {
    label: "교육기간",
    content: <PanoramaDateContent />,
  },
  {
    label: "교육시간\n및 장소",
    content: <PanoramaTimePlaceContent />,
  },
];

const DiscipleshipPanorama = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-10 overflow-hidden">
      <AboutHeaderSection text1="성경파노라마" text2="교육을 통해 말씀을" text3="더 깊이 훈련합니다." />
      <div className="flex w-full max-w-screen-lg flex-col">
        <nav className="flex h-[70px] w-full items-center justify-center gap-1">
          {PANORAMA_DATA.map((menu, idx) => (
            <DiscipleshipTabBar
              key={menu.label}
              label={menu.label}
              currnetIndex={idx}
              selectedIndex={tabIndex}
              onClick={(selectedIndex) => setTabIndex(selectedIndex)}
            />
          ))}
        </nav>
        {PANORAMA_DATA[tabIndex].content}
      </div>
    </div>
  );
};

export default DiscipleshipPanorama;
