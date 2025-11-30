import Layout from "@/components/layout";
import Resources from "@/components/news/resources";

const ResourcesPage = () => {
  return (
    <Layout pageTitle="자료함" title="자료함" customBanner={<></>} hasChildrenPadding={false}>
      <Resources />
    </Layout>
  );
};

export default ResourcesPage;
