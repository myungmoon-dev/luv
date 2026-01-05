import Layout from "@/components/layout";
import Session from "@/components/news/session";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const SessionNewsPage = () => {
  return (
    <Layout
      pageTitle="당회소식"
      title="당회소식"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/news/banner5.jpg"
      innerMenus={newsInnerMenus}
    >
      <Session />
    </Layout>
  );
};

export default SessionNewsPage;
