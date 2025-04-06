import AboutTitle from "@/components/about/title";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import Image from "next/image";

interface IMenu {
  title: string;
  icon: string;
  path: string;
}

const menuList: IMenu[] = [
  { title: "교회소개", icon: "church", path: "/" },
  { title: "목회비전", icon: "vision", path: "/" },
  { title: "섬기는 분들", icon: "leadership", path: "/" },
  { title: "연혁", icon: "history", path: "/" },
  { title: "예배안내", icon: "services", path: "/" },
  { title: "오시는 길", icon: "location", path: "/" },
];

const AboutMainPage = () => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
    >
      <AboutTitle title="교회소개" />
      <div className="relative">
        <div className="relative h-[300px] w-full">
          <Image src="/images/about/intro.jpg" alt="intro" className="object-cover" fill={true} />
        </div>
        <div className="absolute top-0 h-full w-full bg-black/40 px-10 pt-20 text-white">
          <p className="mb-5 text-2xl font-bold">
            교회여!
            <br />
            일어나 세상으로 흘러가라!
          </p>
          <p className="mb-7">명문교회에 오신 것을 환영합니다.</p>
          <p className="text-sm">{"자세히 보기 >"}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between gap-y-5 bg-[#f8f8f8] px-20 py-10">
        {menuList.map((menu) => (
          <div className="m-auto flex w-fit cursor-pointer flex-col items-center gap-2" key={menu.title}>
            <div className="rounded-full bg-white p-5">
              <div className="relative h-[32px] w-[32px]">
                <Image src={`/images/about/${menu.icon}.png`} alt={menu.title} fill={true} />
              </div>
            </div>
            <p className="text-sm font-bold">{menu.title}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutMainPage;
