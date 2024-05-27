import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import ProfileList from "@/components/about/profileList";

const LeadershipMinisterPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-교역자"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="minister" className="lg:grid-cols-2" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipMinisterPage;
