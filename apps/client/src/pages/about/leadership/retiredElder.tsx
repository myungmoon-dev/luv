import AboutBack from "@/components/about/Back";
import ProfileList from "@/components/about/leadership/profileList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipRetiredElderPage = () => {
  return (
    <Layout pageTitle="섬기는 분들-원로장로" title="섬기는 분들" customBanner={<></>} hasChildrenPadding={false}>
      <AboutBack title="섬기는 분들" />
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="retiredElder" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipRetiredElderPage;
