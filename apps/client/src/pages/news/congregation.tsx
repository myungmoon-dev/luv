import Layout from "@/components/layout";
import CongregationNews from "@/components/news/congregation";

const CongregationNewsPage = () => {
  return (
    <Layout pageTitle="교회 소식" title="교회 소식" customBanner={<></>} hasChildrenPadding={true}>
      <CongregationNews />
    </Layout>
  );
};

export default CongregationNewsPage;
