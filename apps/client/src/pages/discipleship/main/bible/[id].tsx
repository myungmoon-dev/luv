import DiscipleshipMainBibleDetail from "@/components/discipleship/main/bible/detail";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipMainBibleDetailPage = () => {
  return (
    <Layout
      pageTitle="성경통독"
      title="성경통독"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipMainBibleDetail />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
