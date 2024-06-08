import DiscipleshipTabBarContentSection from "@/components/discipleship/tabs/section";
import DiscipleshipTabBarContentWrapper from "@/components/discipleship/tabs/wrapper";
import { IDiscipleshipTabData } from "type";

// FIXME: DB 저장해야 함
const PANORAMA_DATE_DATA: IDiscipleshipTabData[] = [
  {
    title: "4주 과정",
    text: "강의는 상황에 따라 개설되오니 교회소식을 참고해주시길 바랍니다.",
  },
];
const PanoramaDateContent = () => {
  return (
    <DiscipleshipTabBarContentWrapper className="h-[200px] xl:h-[300px]">
      {PANORAMA_DATE_DATA.map((data) => (
        <DiscipleshipTabBarContentSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
      ))}
    </DiscipleshipTabBarContentWrapper>
  );
};

export default PanoramaDateContent;
