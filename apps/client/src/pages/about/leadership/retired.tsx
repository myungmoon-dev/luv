import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import Image from "next/image";

const LeadershipRetiredPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-원로목사"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <div className="flex items-start justify-center gap-10 px-3 pb-5">
          <div className="relative flex h-[250px] w-[200px] items-center justify-center overflow-hidden rounded-xl shadow-2xl ">
            <Image src="/images/leader/deok-jin.jpeg" alt="이덕진 원로목사" fill className="object-cover" />
          </div>
          <div className="flex max-w-sm flex-grow flex-col gap-5 pt-10">
            <div className="flex flex-col items-center gap-3 border-b-[1px] border-gray-300 pb-2 md:flex-row">
              <h2 className="text-lg font-bold md:text-2xl">이덕진</h2>
              <p className="text-sm font-[500] md:text-xl">원로목사</p>
            </div>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipRetiredPage;
