import AboutBack from "@/components/about/Back";
import LgNavigation from "@/components/about/LgNavigation";
import LeadershipMissionary from "@/components/about/leadership/missionary";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipMissionaryPage = () => {
  return (
    <Layout pageTitle="섬기는 분들-선교사" title="섬기는 분들" customBanner={<></>} hasChildrenPadding={false}>
      <AboutBack title="섬기는 분들" />
      <LgNavigation/>
      <Tabs menus={aboutLeaderMenus}>
        <LeadershipMissionary />
      </Tabs>
    </Layout>
  );
};

export default LeadershipMissionaryPage;
