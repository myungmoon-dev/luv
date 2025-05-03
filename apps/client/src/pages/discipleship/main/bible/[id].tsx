import DiscipleshipMainBibleDetail from "@/components/discipleship/main/bible/detail";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipMainBibleDetailPage = () => {
  return (
    <Layout
      pageTitle="성경통독"
      title="성경통독"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/bibleBanner.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipMainBibleDetail />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
