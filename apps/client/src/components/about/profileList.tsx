import { cn } from "ui";
import Profile from "./profile";

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
}

// FIXME: staffProfiles DB에 저장
const staffProfiles = [
  {
    name: "이 삭",
    description: "2023년 12월 부임",
    image: "/images/leader/lee-sak.png",
    position: "1교구, 신혼부부, 전도위원회, 시설위원회",
    tabType: "minister",
    officerType: "associate",
  },
  {
    name: "표명성",
    description: "2023년 12월 부임",
    image: "/images/leader/myung-seong.png",
    position: "2교구, 1청년부, 예배위원회, 찬양위원회",
    tabType: "minister",
    officerType: "associate",
  },
  {
    name: "이현준",
    description: "2021년 12월 부임",
    image: "/images/leader/hyun-jun.png",
    position: "중등부, 고등부, 미디어위원회, 체육친교위원회",
    tabType: "minister",
    officerType: "associate",
  },
  {
    description: "2023년 1월 부임",
    image: "/images/leader/jae-jun.png",
    name: "정재준",
    position: "새가족위원회, 선교위원회, 주일예배",
    tabType: "minister",
    officerType: "associate",
  },
  {
    name: "장건진",
    image: "/images/leader/geon-jin.png",
    description: "2023년 12월 부임",
    position: "유년부, 초등부, 금요기도회 찬양인도",
    tabType: "minister",
    officerType: "associate",
  },
  {
    description: "2023년 12월 부임",
    image: "/images/leader/gyu-bo.png",
    name: "김규보",
    position: "상담사역 (총신대 상담학 교수)",
    tabType: "minister",
    officerType: "associate",
  },
  {
    description: "2004년 1월 부임",
    image: "/images/leader/mae-sil.png",
    name: "박매실",
    position: "1교구, 신혼부부, 차량위원회",
    tabType: "minister",
    officerType: "evangelist",
  },
  {
    name: "이능옥",
    image: "/images/leader/neung-oak.png",
    description: "2008년 1월 부임",
    position: "2교구, 실버구역, 새가족부, 새가족위원회",
    tabType: "minister",
    officerType: "evangelist",
  },
  {
    name: "순현주",
    description: "2023년 12월 부임",
    image: "/images/leader/hyun-ju.png",
    position: "유치부, 교육디렉터, 교육위원회",
    tabType: "minister",
    officerType: "evangelist",
  },
  {
    name: "김화선",
    description: "2023년 12월 부임",
    image: "/images/leader/hwa-seon.png",
    position: "영아부, 엄마QT학교",
    tabType: "minister",
    officerType: "evangelist",
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
    position: "재정위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "박광재",
    image: "/images/elder/park_gj.png",
    position: "예배위원회 위원장",
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
    position: "해외 파견",
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
    name: "곽형우",
    image: "/images/elder/gwak_hw.png",
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
    name: "정성환 ",
    image: "/images/elder/jung_sh.png",
    position: "체육,친교위원회 위원장",
    tabType: "elder",
    officerType: "elder",
  },
  {
    name: "조미훈",
    image: "/images/elder/jo_mh.png",
    position: "시설관리",
    tabType: "staff",
    officerType: "elder",
  },
  {
    name: "박용래",
    image: "/images/staff/park_yl.png",
    position: "시설관리 및 차량운행",
    tabType: "staff",
    officerType: "deacon",
  },
];
const ProfileList = ({ tabType, className }: IProfileListProps) => {
  return (
    <div className={cn("grid grid-cols-1 gap-20 px-5 lg:gap-32 xl:gap-20", className)}>
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
            />
          );
        })}
    </div>
  );
};

export default ProfileList;
