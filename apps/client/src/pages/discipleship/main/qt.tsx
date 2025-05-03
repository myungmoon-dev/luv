import DiscipleshipQt from "@/components/discipleship/main/qt";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipMainQtPage = () => {
  return (
    <Layout
      pageTitle="큐티 세미나"
      title="큐티 세미나"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/qt/banner.jpg"
      bannerImgClass="object-[50%_50%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipQt />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainQtPage;
