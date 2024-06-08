import DiscipleshipTabBarContentSection from "@/components/discipleship/tabs/section";
import DiscipleshipTabBarContentWrapper from "@/components/discipleship/tabs/wrapper";
import { IDiscipleshipTabData } from "type";

// FIXME: DB 저장해야 함
const PANORAMA_TARGET_DATA: IDiscipleshipTabData[] = [
  {
    title: "구약의 파노라마",
    text: "명문교회 성도",
  },
  {
    title: "신약의 파노라마",
    text: "구약의 파노라마 수료자",
  },
];
const PanoramaTargetContent = () => {
  return (
    <DiscipleshipTabBarContentWrapper className="h-[300px] xl:h-[400px]">
      {PANORAMA_TARGET_DATA.map((data) => (
        <DiscipleshipTabBarContentSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
      ))}
    </DiscipleshipTabBarContentWrapper>
  );
};

export default PanoramaTargetContent;
