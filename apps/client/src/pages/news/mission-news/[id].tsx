import Layout from "@/components/layout";
import MissionDetail from "@/components/news/mission/detail";

const MissionNewsDetailPage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      customBanner={<></>}
      hasChildrenPadding={false}
    >
      <MissionDetail />
    </Layout>
  );
};

export default MissionNewsDetailPage;
