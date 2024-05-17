import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus, staffType } from "@/constants/innerMenus/about";
import CustomImage from "@/components/customImage";
import Tabs from "@/components/layout/tabs";

// FIXME: 임시
interface IProfile {
  name: string;
  description?: string;
  image: string;
  tabType: string;
  className?: string;
  position?: string;
}

// FIXME: 임시
const elderProfiles : IProfile[] = [
  {
    name: "김용출",
    image: "/images/elder/kim_yc.png",
    position: "협력위원회 위원장",
    tabType: "elder",
  },
  {
    name: "오태희",
    image: "/images/elder/oh_th.png",
    position: "교회발전위원회 위원장",
    tabType: "elder",
  },
  {
    name: "최정만",
    image: "/images/elder/choi_jm.png",
    position: "재정위원회 위원장",
    tabType: "elder",
  },
  {
    name: "박광재",
    image: "/images/elder/park_gj.png",
    position: "예배위원회 위원장",
    tabType: "elder",
  },
  {
    name: "최형돈",
    image: "/images/elder/choi_hd.png",
    position: "선교위원회 위원장",
    tabType: "elder",
  },
  {
    name: "이수만",
    image: "/images/elder/lee_sm.png",
    position: "찬양위원회 위원장",
    tabType: "elder",
  },
  {
    name: "이관용",
    image: "/images/elder/lee_gy.png",
    position: "새가족위원회 위원장",
    tabType: "elder",
  },
  {
    name: "이병곤",
    image: "/images/elder/profile.png",
    position: "해외 파견",
    tabType: "elder",
  },
  {
    name: "박종균",
    image: "/images/elder/park_jg.png",
    position: "사회복지위원회 위원장",
    tabType: "elder",
  },
  {
    name: "구유택",
    image: "/images/elder/koo_yt.png",
    position: "목양위원회 위원장",
    tabType: "elder",
  },
  {
    name: "김회국",
    image: "/images/elder/kim_hg.png",
    position: "차량위원회 위원장",
    tabType: "elder",
  },
  {
    name: "조윤형",
    image: "/images/elder/jo_yh.png",
    position: "시설위원회 위원장",
    tabType: "elder",
  },
  {
    name: "최균섭",
    image: "/images/elder/choi_gs.png",
    position: "전도위원회 위원장",
    tabType: "elder",
  },
  {
    name: "이중관",
    image: "/images/elder/lee_jg.png",
    position: "미디어위원회 위원장",
    tabType: "elder",
  },
  {
    name: "송순섭",
    image: "/images/elder/song_ss.png",
    position: "장례,혼인위원회 위원장",
    tabType: "elder",
  },
  {
    name: "박종일 ",
    image: "/images/elder/park_ji.png",
    position: "교육위원회 위원장",
    tabType: "elder",
  },
  {
    name: "정성환 ",
    image: "/images/elder/jung_sh.png",
    position: "체육,친교위원회 위원장",
    tabType: "elder",
  },
];

const LeadershipElderPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-장로"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-20">
          {elderProfiles
            .filter((profile) => profile.tabType === "elder")
            .map((profile) => {
              return (
                <div className="relative flex w-full items-center justify-center">
                  <div className="z-[1] flex flex-col justify-center gap-3">
                    <h1 className="font-SCoreDream text-2xl text-blue-600">
                      {profile.name} {staffType.filter((staff) => staff.label === "elder")[0].type}
                    </h1>
                    <p className="font-semibold">{profile.description}</p>
                    <p>{profile.position}</p>
                  </div>
                  <CustomImage src={profile.image} alt={profile.name} className="z-[1] h-[200px] w-[150px]" imgClass="object-[100%_10%]" />
                  <div className="absolute h-full w-1/2 rounded-full bg-gray-200 md:w-[200px]" />
                </div>
              );
            })}
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipElderPage;
