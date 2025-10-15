import AboutBack from "@/components/about/Back";
import MinisterList from "@/components/about/leadership/ministerList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipMinisterPage = () => {
  return (
    <Layout pageTitle="섬기는 분들-교역자" title="섬기는 분들" customBanner={<></>} hasChildrenPadding={false}>
      <AboutBack title="섬기는 분들" />
      <Tabs menus={aboutLeaderMenus}>
        <MinisterList />
      </Tabs>
    </Layout>
  );
};

export default LeadershipMinisterPage;
