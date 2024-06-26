import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import ProfileList from "@/components/about/leadership/profileList";

const LeadershipStaffPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-직원"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="staff" className="md:grid-cols-2 xl:grid-cols-3" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipStaffPage;
