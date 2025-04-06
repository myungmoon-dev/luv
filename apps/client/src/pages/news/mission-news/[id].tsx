import Layout from "@/components/layout";
import MissionDetail from "@/components/news/mission/detail";

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // TODO: 선교지 소식 id 가져와 적용
}

const MissionNewsDetailPage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner5.jpg"
    >
      <MissionDetail />
    </Layout>
  );
};

export default MissionNewsDetailPage;
