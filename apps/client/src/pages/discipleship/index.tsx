import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipPage = () => {
  return (
    <Layout
      pageTitle="전체 안내"
      title="전체 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default DiscipleshipPage;
