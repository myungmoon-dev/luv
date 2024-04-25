import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import ProfileList from "@/components/about/profileList";
import Tabs from "@/components/layout/tabs";

const LeadershipMinisterPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/common/paint.jpg"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="minister" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipMinisterPage;
