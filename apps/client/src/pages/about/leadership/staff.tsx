import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import ProfileList from "@/components/about/leadership/profileList";

const LeadershipStaffPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-직원"
      title="섬기는 분들"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="staff" className="xl:grid-cols-3 md:grid-cols-2" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipStaffPage;
