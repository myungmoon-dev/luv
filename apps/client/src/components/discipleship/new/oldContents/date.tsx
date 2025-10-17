import { IDiscipleshipTabData } from "type";
import DiscipleshipTabBarContentWrapper from "../../tabs/wrapper";
import DiscipleshipTabBarContentSection from "../../tabs/section";
import DiscipleshipTabBarContentCard from "../../tabs/card";

// FIXME: DB 저장해야 함
const NEWCOMMERS_DATE_DATA: IDiscipleshipTabData[] = [
  {
    title: "5주 새신자 과정",
    content: [
      {
        title: "1주차",
        text: "하나님의 창조와 사람의 죄",
      },
      {
        title: "2주차",
        text: "죄 그리고 구원의 길",
      },
      {
        title: "3주차",
        text: "예수님 안에서의 성장하는 삶",
      },
      {
        title: "4주차",
        text: "신앙의 성장과 말씀(성경)",
      },
      {
        title: "5주차",
        text: "성도에게 교희의 유익과 신앙여정",
      },
    ],
  },
];
const ForNewCommersDate = () => (
  <DiscipleshipTabBarContentWrapper className="md:h-[600px] lg:h-[700px]">
    {NEWCOMMERS_DATE_DATA.map((data) => (
      <DiscipleshipTabBarContentSection key={data.title} title={data.title}>
        {data.content &&
          data.content.map((content, idx) => (
            <DiscipleshipTabBarContentCard
              key={idx}
              title={content.title}
              text={content.text}
              className="items-center"
            />
          ))}
      </DiscipleshipTabBarContentSection>
    ))}
  </DiscipleshipTabBarContentWrapper>
);

export default ForNewCommersDate;
