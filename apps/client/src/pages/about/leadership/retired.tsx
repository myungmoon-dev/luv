import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import ProfileList from "@/components/about/profileList";
import CustomImage from "@/components/customImage";

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
        <div className="relative flex w-full items-center justify-center px-3 md:gap-5">
          <div className="z-[1] flex flex-col justify-center gap-3">
            <h1 className="font-SCoreDream text-2xl text-blue-600 xl:text-5xl">이덕진 원로목사</h1>
            <p className="font-SCoreDream xl:text-2xl">명문교회 원로목사</p>
            <p className="whitespace-pre-wrap break-keep text-xs md:text-sm lg:text-base xl:text-lg">
              대한예수교장로회 (합동) GMS 명예선교사, 꿈을꾸는세계선교회 대표
            </p>
          </div>
          <CustomImage
            src={"/images/leader/deok-jin.png"}
            alt="이덕진 원로목사"
            className="z-[1] h-[200px] w-[150px] xl:h-[400px] xl:w-[300px]"
            imgClass="object-[50%_0%]"
            quality={30}
          />
          <div className="absolute h-full w-[190px] rounded-full bg-gray-200 md:w-[200px] xl:w-[400px]" />
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipRetiredPage;
