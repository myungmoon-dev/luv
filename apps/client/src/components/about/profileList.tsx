import Profile from "./profile";

interface IProfileListProps {
  tabType: string;
}
// FIXME: profiles DB에 저장 /  position keyword로 변경해야 함
const profiles = [
  {
    // FIXME: 명문교회 개척, 서울강남노회 증경노회장, GMS 명예선교사, 꿈을주는세계선교회 대표
    description: "",
    image: "/images/leader/deok-jin.jpeg",
    name: "이덕진",
    position: "",
    pastor: "retired",
    tab: "retired",
  },
  {
    // FIXME: 담임, 2청년부, 임직 - 2022년 12월
    description: "",
    image: "/images/leader/ji-hyuk.jpeg",
    name: "김지혁",
    position: "",
    pastor: "senior",
    tab: "senior",
  },
  {
    name: "이 삭",
    description: "2023년 12월",
    image: "/images/leader/lee-sak.jpeg",
    position: "1교구, 신혼부부, 전도위원회, 시설위원회",
    pastor: "associate",
    tab: "minister",
  },
  {
    name: "표명성",
    description: "2023년 12월",
    image: "/images/leader/myung-seong.jpeg",
    position: "2교구, 1청년부, 예배위원회, 찬양위원회",
    pastor: "associate",
    tab: "minister",
  },
  {
    name: "이현준",
    description: "2021년 12월",
    image: "/images/leader/hyun-jun.jpeg",
    position: "중등부, 고등부, 미디어위원회, 체육친교위원회",
    pastor: "associate",
    tab: "minister",
  },
  {
    description: "2023년 1월",
    image: "/images/leader/jae-jun.png",
    name: "정재준",
    position: "새가족위원회, 선교위원회, 주일예배, 찬양인도(1부)",
    pastor: "associate",
    tab: "minister",
  },
  {
    name: "장건진",
    image: "/images/leader/geon-jin.jpeg",
    description: "2023년 12월",
    position: "유년부, 초등부, 금요기도회 찬양인도",
    pastor: "associate",
    tab: "minister",
  },
  {
    description: "2023년 12월",
    image: "/images/leader/gyu-bo.jpeg",
    name: "김규보",
    position: "상담사역 (총신대학교 상담학 교수)",
    pastor: "associate",
    tab: "minister",
  },
  {
    description: "2004년 1월",
    image: "/images/leader/mae-sil.jpeg",
    name: "박매실",
    position: "1교구, 신혼부부, 차량위원회",
    pastor: "evangelist",
    tab: "minister",
  },
  {
    name: "이능옥",
    image: "/images/leader/neung-oak.jpeg",
    description: "2008년 1월",
    position: "2교구, 실버구역, 새가족부, 새가족위원회",
    pastor: "evangelist",
    tab: "minister",
  },
  {
    name: "순현주",
    description: "2023년 12월",
    image: "/images/leader/hyun-ju.png",
    position: "유치부, 교육디렉터, 교육위원회",
    pastor: "evangelist",
    tab: "minister",
  },
  {
    name: "김화선",
    description: "2023년 12월",
    image: "/images/leader/hwa-seon.jpeg",
    position: "영아부, 엄마QT학교",
    pastor: "evangelist",
    tab: "minister",
  },
];
const ProfileList = ({ tabType }: IProfileListProps) => {
  return (
    <div className="flex flex-col gap-10">
      {profiles
        .filter((profile) => profile.tab === tabType)
        .map((profile) => {
          return (
            <Profile
              key={profile.name}
              name={profile.name}
              position={profile.position}
              description={profile.description}
              image={profile.image}
              alt={profile.name}
              type={profile.pastor}
            />
          );
        })}
    </div>
  );
};

export default ProfileList;
