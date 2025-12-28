import Layout from "@/components/layout";
import News from "@/components/news";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const NewsPage = () => {
  return (
    <Layout
      pageTitle="명문소식"
      title="명문소식"
      innerMenus={newsInnerMenus}
      customBanner={<></>}
      hasChildrenPadding={false}
    >
      <News />
    </Layout>
  );
};

export default NewsPage;
