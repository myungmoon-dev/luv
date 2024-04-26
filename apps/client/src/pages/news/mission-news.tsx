import Layout from "@/components/layout";
import Mission from "@/components/news/mission";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const MissionNewsPage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner.jpg"
      innerMenus={newsInnerMenus}
    >
      <Mission />
    </Layout>
  );
};

export default MissionNewsPage;
