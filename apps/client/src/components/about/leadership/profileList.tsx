import { cn } from "ui";
import Profile from "./profile";
import { officerType } from "@/constants/innerMenus/about";

interface IProfileListProps {
  tabType: string;
  className?: string;
}
export interface IProfile {
  name: string;
  description?: string;
  image: string;
  tabType: string;
  className?: string;
  position?: string;
  greeting?: string;
}

// FIXME: staffProfiles DB에 저장
const staffProfiles = [
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
    position: "유초등부, 사회복지위원회",
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
  {
    name: "김종란",
    image: "/images/missionary/kim_jl.png",
    position: "방글라데시 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "이강선",
    image: "/images/missionary/lee_gs.png",
    position: "방글라데시 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "김주신",
    image: "/images/missionary/kim_js.png",
    position: "불가리아 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "정다정",
    image: "/images/missionary/jung_dj.png",
    position: "불가리아 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "양성호",
    image: "/images/missionary/yang_sh.png",
    position: "영국 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "김성경",
    image: "/images/missionary/kim_sk.png",
    position: "영국 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "제종완",
    image: "/images/missionary/je_jw.png",
    position: "우간다 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "신숙화",
    image: "/images/missionary/shin_sh.png",
    position: "우간다 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "이승현",
    image: "/images/missionary/lee_sh.png",
    position: "인도/태국 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "윤선휘",
    image: "/images/missionary/yoon_sh.png",
    position: "인도/태국 선교사",
    tabType: "missionary",
    officerType: "missionary",
  },
  {
    name: "박효진",
    image: "/images/retiredElder/park_hj.png",
    position: "",
    tabType: "retiredElder",
    officerType: "elder",
  },
  {
    name: "장수희",
    image: "/images/retiredElder/jang_sh.png",
    position: "",
    tabType: "retiredElder",
    officerType: "elder",
  },
  {
    name: "김용출",
    image: "/images/elder/kim_yc.png",
    position: "협력위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "오태희",
    image: "/images/elder/oh_th.png",
    position: "교회발전위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "최정만",
    image: "/images/elder/choi_jm.png",
    position: "",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "박광재",
    image: "/images/elder/park_gj.png",
    position: "재정위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "최형돈",
    image: "/images/elder/choi_hd.png",
    position: "선교위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "이수만",
    image: "/images/elder/lee_sm.png",
    position: "찬양위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "이관용",
    image: "/images/elder/lee_gy.png",
    position: "새가족위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "이병곤",
    image: "/images/elder/lee_bg.png",
    position: "예배위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "박종균",
    image: "/images/elder/park_jg.png",
    position: "사회복지위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "구유택",
    image: "/images/elder/koo_yt.png",
    position: "목양위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "김회국",
    image: "/images/elder/kim_hg.png",
    position: "차량위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "조윤형",
    image: "/images/elder/jo_yh.png",
    position: "시설위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "최균섭",
    image: "/images/elder/choi_gs.png",
    position: "전도위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "이중관",
    image: "/images/elder/lee_jg.png",
    position: "미디어위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "송순섭",
    image: "/images/elder/song_ss.png",
    position: "장례,혼인위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "박종일 ",
    image: "/images/elder/park_ji.png",
    position: "교육위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "정성환",
    image: "/images/elder/jung_sh.png",
    position: "체육,친교위원회 위원장",
    tabType: "elder",
    officerType: "otherElder",
  },
  {
    name: "조동욱",
    image: "/images/elder/jo_dw1.png",
    position: "",
    tabType: "elder",
    officerType: "otherElder",
  },
  {
    name: "조미훈",
    image: "/images/elder/jo_mh.png",
    position: "시설관리",
    tabType: "staff",
    officerType: "elder",
  },
  {
    name: "김해봄",
    image: "/images/leader/hae-bom.png",
    position: "WithEL 찬양팀",
    tabType: "staff",
    officerType: "staff",
  },
  {
    name: "김태연",
    image: "/images/leader/tae-yeon.png",
    position: "WithEL 찬양팀",
    tabType: "staff",
    officerType: "staff",
  },
];
const ProfileList = ({ tabType, className }: IProfileListProps) => {
  return (
    <div className={cn("xl:gap-20 grid grid-cols-1 gap-20 px-5 lg:gap-32", className)}>
      {staffProfiles
        .filter((profile) => tabType === profile.tabType)
        .map((profile) => {
          return (
            <Profile
              key={profile.name}
              alt={profile.name}
              image={profile.image}
              name={profile.name}
              officer={profile.officerType}
              tabType={profile.tabType}
              description={profile.description}
              position={profile.position}
              greeting={profile.greeting}
            />
          );
        })}
    </div>
  );
};

export default ProfileList;
