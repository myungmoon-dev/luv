import Layout from "@/components/layout";
import Mission from "@/components/news/mission";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const MissionNewsPage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/news/banner5.jpg"
      innerMenus={newsInnerMenus}
    >
      <Mission />
    </Layout>
  );
};

export default MissionNewsPage;
