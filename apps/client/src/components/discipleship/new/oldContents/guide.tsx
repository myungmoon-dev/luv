import { IDiscipleshipTabData } from "type";
import DiscipleshipTabBarContentWrapper from "../../tabs/wrapper";
import DiscipleshipTabBarContentSection from "../../tabs/section";

// FIXME: DB 저장해야 함
const NEWCOMMERS_GUIDE_DATA: IDiscipleshipTabData[] = [
  {
    title: "명문교회의 등록교인",
    text: "새가족 온라인(상시), 현장(주일/주중) 등록 가능합니다.",
  },
  {
    title: "등록처 위치",
    text: "주일 (사랑채플 본당 입구), 주중 (비전채플 4층 새가족담당교역자)",
  },
  {
    title: "연령",
    text: "만 40세 이상의 장년 또는 기혼자",
    caution: "만 40세미만의 미혼자는 1/2청년부에서 별도의 과정이 진행됩니다.",
  },
];

const ForNewCommersGuide = () => (
  <DiscipleshipTabBarContentWrapper>
    {NEWCOMMERS_GUIDE_DATA.map((data) => (
      <DiscipleshipTabBarContentSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
    ))}
  </DiscipleshipTabBarContentWrapper>
);

export default ForNewCommersGuide;
