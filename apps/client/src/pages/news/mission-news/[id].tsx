import Layout from "@/components/layout";
import MissionDetail from "@/components/news/mission/detail";

const MissionNewsDetailPage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/news/banner5.jpg"
    >
      <MissionDetail />
    </Layout>
  );
};

export default MissionNewsDetailPage;
