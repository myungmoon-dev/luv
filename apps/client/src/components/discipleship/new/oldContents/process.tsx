import { IDiscipleshipTabData } from "type";
import DiscipleshipTabBarContentWrapper from "../../tabs/wrapper";
import DiscipleshipTabBarContentSection from "../../tabs/section";
import DiscipleshipTabBarContentCard from "../../tabs/card";

const NEWCOMMERS_PROCESS_DATA: IDiscipleshipTabData[] = [
  {
    title: "5단계의 관리를 통해 교회정착, 명문교회 교인으로의 준비를 돕습니다.",
    content: [
      {
        title: "1. 새가족등록",
        text: "등록하시면 환영인사 후 담임목사님과 면담",
      },
      {
        title: "2. 5주 교육",
        text: "이슬비 편지, 관리문자, 교육, 수료 후 구역연결",
      },
      {
        title: "3. 등반,구역 인계",
        text: "등록심방, 신앙훈련과정 참여",
      },
      {
        title: "4. 성장반 5주 교육",
        text: "등반 후 교회에서 실제적인 신앙의 도움을 주는 추가교육",
      },
      {
        title: "5. 새가족 환영회",
        text: "연 2회 새가족 환영식",
      },
    ],
  },
];
const ForNewCommersProcess = () => (
  <DiscipleshipTabBarContentWrapper className="h-[700px] md:h-[800px]">
    {NEWCOMMERS_PROCESS_DATA.map((data) => (
      <DiscipleshipTabBarContentSection key={data.title} title={data.title}>
        {data.content &&
          data.content.map((content) => (
            <DiscipleshipTabBarContentCard
              key={content.text}
              title={content.title}
              text={content.text}
              className="flex-col 2xl:flex-row 2xl:items-center 2xl:gap-10"
            />
          ))}
      </DiscipleshipTabBarContentSection>
    ))}
  </DiscipleshipTabBarContentWrapper>
);

export default ForNewCommersProcess;
