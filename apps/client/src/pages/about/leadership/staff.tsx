import LgNavigation from "@/components/about/LgNavigation";
import ProfileList from "@/components/about/leadership/profileList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipStaffPage = () => {
  return (
    <Layout pageTitle="섬기는 분들-직원" title="섬기는 분들" customBanner={<></>} hasChildrenPadding={false}>
      <LgNavigation/>
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="staff" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipStaffPage;
