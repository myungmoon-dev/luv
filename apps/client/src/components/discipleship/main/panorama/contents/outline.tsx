import DiscipleshipTabBarContentSection from "@/components/discipleship/tabs/section";
import DiscipleshipTabBarContentWrapper from "@/components/discipleship/tabs/wrapper";
import { IDiscipleshipTabData } from "type";

// FIXME: DB 저장해야 함
const PANORAMA_OUTLINE_DATA: IDiscipleshipTabData[] = [
  {
    title: "파노라마 교육개요",
    text: "구약과 신약의 주요사건을 바탕으로 지리적 배경과 함께 연대순으로 살펴가며 성경을 한눈으로 조망합니다.",
  },
];
const PanoramaOutlineContent = () => {
  return (
    <DiscipleshipTabBarContentWrapper className="h-[200px] xl:h-[300px]">
      {PANORAMA_OUTLINE_DATA.map((data) => (
        <DiscipleshipTabBarContentSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
      ))}
    </DiscipleshipTabBarContentWrapper>
  );
};

export default PanoramaOutlineContent;
