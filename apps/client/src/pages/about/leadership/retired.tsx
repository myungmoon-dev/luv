import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import CustomImage from "@/components/customImage";

const LeadershipRetiredPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-원로목사"
      title="섬기는 분들"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <div className="relative flex w-full items-center justify-center px-3 md:gap-5">
          <div className="z-[1] flex flex-col justify-center gap-3">
            <h1 className="xl:text-5xl font-SCoreDream text-2xl">이덕진 원로목사</h1>
            <p className="xl:text-2xl font-SCoreDream text-blue-600">명문교회 원로목사</p>
            <p className="xl:text-lg whitespace-pre-wrap break-keep text-xs md:text-sm lg:text-base">
              대한예수교장로회 (합동) GMS 명예선교사, 꿈을꾸는세계선교회 대표
            </p>
          </div>
          <CustomImage
            src={"/images/leader/deok-jin.png"}
            alt="이덕진 원로목사"
            className="xl:h-[400px] xl:w-[300px] z-[1] h-[200px] w-[150px]"
            imgClass="object-[50%_0%]"
            quality={30}
          />
          <div className="xl:w-[400px] absolute h-full w-[190px] rounded-full bg-gray-200 md:w-[200px]" />
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipRetiredPage;
