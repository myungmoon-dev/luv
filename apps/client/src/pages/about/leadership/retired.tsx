import AboutBack from "@/components/about/Back";
import CustomImage from "@/components/customImage";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipRetiredPage = () => {
  return (
    <Layout pageTitle="섬기는 분들-원로목사" title="섬기는 분들" customBanner={<></>} hasChildrenPadding={false}>
      <AboutBack title="섬기는 분들" />
      <Tabs menus={aboutLeaderMenus}>
        <div>
          <div className="flex flex-col items-center gap-4">
            <CustomImage
              className="size-[100px]"
              src="/images/leader/deok-jin.jpeg"
              alt="원로목사"
              imgClass="rounded-full"
            />
            <p className="text-center font-medium text-[#464646]">이덕진 원로목사</p>
            <p className="text-center text-sm text-[#777777]">
              대한예수교장로회(합동) GMS 명예선교사,
              <br />
              꿈을꾸는세계선교회 대표
            </p>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipRetiredPage;
