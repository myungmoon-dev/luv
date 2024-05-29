import Layout from "@/components/layout";
import MissionCreate from "@/components/news/mission/create";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const MissionNewspCreatePage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner5.jpg"
      // innerMenus={newsInnerMenus}
    >
      <MissionCreate />
    </Layout>
  );
};

export default MissionNewspCreatePage;
