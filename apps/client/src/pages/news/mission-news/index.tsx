import Layout from "@/components/layout";
import Mission from "@/components/news/mission";

const MissionNewsPage = () => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      customBanner={<></>}
      hasChildrenPadding={false}
    >
      <Mission />
    </Layout>
  );
};

export default MissionNewsPage;
