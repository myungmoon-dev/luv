import Layout from "@/components/layout";
import Session from "@/components/news/session";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const SessionNewsPage = () => {
  return (
    <Layout
      pageTitle="당회소식"
      title="당회소식"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/news/banner5.jpg"
      innerMenus={newsInnerMenus}
    >
      <Session />
    </Layout>
  );
};

export default SessionNewsPage;
