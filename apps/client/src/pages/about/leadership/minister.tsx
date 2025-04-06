import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import MinisterList from "@/components/about/leadership/ministerList";

const LeadershipMinisterPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-교역자"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <MinisterList />
      </Tabs>
    </Layout>
  );
};

export default LeadershipMinisterPage;
