import Minister from "./minister";

// FIXME: DB 저장 예정
const ministerProfiles = [
  {
    name: "이 삭",
    description: "",
    image: "/images/leader/lee-sak.png",
    position: "1교구, 신혼부부, 전도위원회, 시설위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "하나님께서는 우리에게 믿음을 주셨고, 그 믿음 안에서 모든 것이 가능하게 되는 줄 믿습니다.",
  },
  {
    name: "표명성",
    description: "",
    image: "/images/leader/myung-seong.png",
    position: "2교구, 1청년부, 예배위원회, 찬양위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "하나님과 성도들 앞에서 진중하지만, 늘 유쾌한 목회자가 되고 싶은 표명성 목사입니다.",
  },
  {
    name: "이현준",
    description: "",
    image: "/images/leader/hyun-jun.png",
    position: "중등부, 고등부, 미디어위원회, 체육친교위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "주님께서 맡겨주신 교회를 사랑하고, 보배로운 청소년들을 주님의 마음으로 섬기겠습니다.",
  },
  {
    name: "정재준",
    description: "",
    image: "/images/leader/jae-jun.png",
    position: "새가족위원회, 선교위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "명문교회를 찾는 모든 분들과 주님 영광을 함께 나누기를 소망합니다.",
  },
  {
    name: "장건진",
    description: "",
    image: "/images/leader/geon-jin.png",
    position: "유년부, 초등부, 사회복지위원회",
    tabType: "minister",
    officerType: "associate",
    greeting: "어린이 사역자 장건진 목사입니다. 명문의 다음세대들을 오직 하나님의 말씀으로 양육하겠습니다.",
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
    position: "1교구, 신혼부부, 차량위원회",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "맡겨주신 사역들과 목양을 하나님의 마음을 담아 기쁨과 감사함으로 섬기겠습니다. 사랑하고 축복합니다.",
  },
  {
    name: "이능옥",
    image: "/images/leader/neung-oak.png",
    description: "",
    position: "2교구, 실버구역, 새가족부, 새가족위원회",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "진실한 사랑은 예수님 안에서 이루어지는 사랑입니다.",
  },
  {
    name: "순현주",
    description: "",
    image: "/images/leader/hyun-ju.png",
    position: "유치부, 교육디렉터, 교육위원회",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "하나님을 경외하는 다음세대를 세우는 일에 온 마음을 다하겠습니다.",
  },
  {
    name: "김화선",
    description: "",
    image: "/images/leader/hwa-seon.png",
    position: "영아부, 엄마QT학교",
    tabType: "minister",
    officerType: "evangelist",
    greeting: "오직 예수님 안에 머무는 다음세대, 영아부를 최선을 다해 섬기겠습니다.",
  },
];

const MinisterList = () => {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center gap-20 px-5 lg:gap-32 xl:gap-20">
      {ministerProfiles.map((profile) => (
        <Minister greeting={profile.greeting} img={profile.image} name={profile.name} position={profile.position} />
      ))}
    </div>
  );
};

export default MinisterList;
