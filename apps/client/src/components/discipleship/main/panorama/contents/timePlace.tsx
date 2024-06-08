import DiscipleshipTabBarContentSection from "@/components/discipleship/tabs/section";
import DiscipleshipTabBarContentWrapper from "@/components/discipleship/tabs/wrapper";
import { IDiscipleshipTabData } from "type";

// FIXME: DB 저장해야 함
const PANORAMA_TIMEPLACE_DATA: IDiscipleshipTabData[] = [
  {
    title: "교육시간",
    text: "평일 오전반, 평일 저녁반",
  },
  {
    title: "교육장소",
    text: "독산동 비전채플",
  },
];
const PanoramaTimePlaceContent = () => {
  return (
    <DiscipleshipTabBarContentWrapper className="h-[300px] xl:h-[400px]">
      {PANORAMA_TIMEPLACE_DATA.map((data) => (
        <DiscipleshipTabBarContentSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
      ))}
    </DiscipleshipTabBarContentWrapper>
  );
};

export default PanoramaTimePlaceContent;
