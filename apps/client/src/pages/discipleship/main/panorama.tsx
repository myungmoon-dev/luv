import DiscipleshipPanorama from "@/components/discipleship/main/panorama";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipMainPanoramaPage = () => {
  return (
    <Layout
      pageTitle="성경 파노라마"
      title="성경 파노라마"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/bibleBanner.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipPanorama />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainPanoramaPage;
