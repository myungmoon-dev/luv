import { IDiscipleshipTabData } from "type";
import DiscipleshipTabBarContentWrapper from "../../tabs/wrapper";
import DiscipleshipTabBarContentSection from "../../tabs/section";

// FIXME: DB 저장해야 함
const NEWCOMMERS_GUIDE_DATA: IDiscipleshipTabData[] = [
  {
    title: "새신자 접수방법",
    text: "온라인 및 현장접수로 진행됩니다.",
    caution: "교제 발송을 위해 주소를 정확하게 기입해주시기 바랍니다.",
  },
];
const ForNewCommersApply = () => (
  <DiscipleshipTabBarContentWrapper className="h-[300px]">
    {NEWCOMMERS_GUIDE_DATA.map((data) => (
      <DiscipleshipTabBarContentSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
    ))}
  </DiscipleshipTabBarContentWrapper>
);

export default ForNewCommersApply;
