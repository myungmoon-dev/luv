import Layout from "@/components/layout";
import Resources from "@/components/news/resources";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const ResourcesPage = () => {
  return (
    <Layout
      pageTitle="자료함"
      title="자료함"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner3.jpg"
      innerMenus={newsInnerMenus}
    >
      <Resources />
    </Layout>
  );
};

export default ResourcesPage;
