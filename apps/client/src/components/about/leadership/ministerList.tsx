import { OfficerLabel } from "@/constants/innerMenus/types";
import Minister from "./minister";

// FIXME: DB 저장 예정
const ministerProfiles = [
  {
    name: "표명성",
    description: "",
    image: "/images/leader/myung-seong.png",
    position: "행정, 교구, 신혼가정, 예배위원회, 찬양위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "하나님과 성도들 앞에서 진중하지만, 늘 유쾌한 목회자가 되고 싶은 표명성 목사입니다.",
  },
  {
    name: "이현준",
    description: "",
    image: "/images/leader/hyun-jun.png",
    position: "청년 디렉터, 전도위원회, 체육친교위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "주님께서 맡겨주신 교회를 사랑하고, 보배로운 청년들을 주님의 마음으로 섬기겠습니다.",
  },
  {
    name: "정재준",
    description: "",
    image: "/images/leader/jae-jun.png",
    position: "새가족위원회, 선교위원회, 시니어 아카데미",
    tabType: "minister",
    officerType: "associate",
    greeting: "명문교회를 찾는 모든 분들과 주님 영광을 함께 나누기를 소망합니다.",
  },
  {
    name: "장건진",
    description: "",
    image: "/images/leader/geon-jin.png",
    position: "유초등부, 교구, 미디어위원회",
    tabType: "minister",
    officerType: "associate",
    greeting:
      "어린이 사역자 장건진 목사입니다. 명문의 다음세대들을 오직 하나님의 말씀으로 양육하겠습니다.",
  },
  {
    name: "김규보",
    description: "",
    image: "/images/leader/gyu-bo.png",
    position: "상담사역 (총신대 상담학 교수)",
    tabType: "minister",
    officerType: "associate",
    greeting: "오직 하나님의 영광만 드러나기를 소망합니다.",
  },
  {
    name: "박매실",
    description: "",
    image: "/images/leader/mae-sil.png",
    position: "교구, 신혼부부, 차량위원회",
    tabType: "minister",
    officerType: "evangelist",
    greeting:
      "맡겨주신 사역들과 목양을 하나님의 마음을 담아 기쁨과 감사함으로 섬기겠습니다. 사랑하고 축복합니다.",
  },
  {
    name: "이능옥",
    image: "/images/leader/neung-oak.png",
    description: "",
    position: "시니어 아카데미, 새가족위원회",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "진실한 사랑은 예수님 안에서 이루어지는 사랑입니다.",
  },
  {
    name: "순현주",
    description: "",
    image: "/images/leader/hyun-ju.png",
    position: "교육디렉터, 유치부, 교육위원회",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "하나님을 경외하는 다음세대를 세우는 일에 온 마음을 다하겠습니다.",
  },
  {
    name: "장은경",
    description: "",
    image: "/images/leader/eun-kyung.png",
    position: "영아부, 엄마QT학교",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "오직 예수님 안에 머무는 다음세대, 영아부를 최선을 다해 섬기겠습니다.",
  },
  {
    name: "김삼열",
    description: "",
    image: "/images/leader/sam-yeol.png",
    position: "중고등부",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "청소년이 하나님 안에서 자라가도록, 묵묵히 곁을 지키겠습니다.",
  },
];

const MinisterList = () => {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center gap-9 px-5 sm:px-10 lg:gap-12 lg:pb-20 xl:gap-20">
      {ministerProfiles.map((profile) => (
        <Minister
          key={profile.name}
          greeting={profile.greeting}
          img={profile.image}
          name={profile.name}
          position={profile.position}
          officer={profile.officerType as OfficerLabel}
        />
      ))}
    </div>
  );
};

export default MinisterList;
