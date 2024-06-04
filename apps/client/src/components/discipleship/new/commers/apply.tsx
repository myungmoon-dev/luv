import { INewCommersData } from "type";
import NewCommersSection from "./common/section";
import NewCommersWrapper from "./common/wrapper";

// FIXME: DB 저장해야 함
const NEWCOMMERS_GUIDE_DATA: INewCommersData[] = [
  {
    title: "새신자 접수방법",
    text: "온라인 및 현장접수로 진행됩니다.",
    caution: "교제 발송을 위해 주소를 정확하게 기입해주시기 바랍니다.",
  },
];
const ForNewCommersApply = () => (
  <NewCommersWrapper className="h-[300px]">
    {NEWCOMMERS_GUIDE_DATA.map((data) => (
      <NewCommersSection key={data.title} title={data.title} text={data.text} caution={data.caution} />
    ))}
  </NewCommersWrapper>
);

export default ForNewCommersApply;
