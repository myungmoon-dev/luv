import Layout from "@/components/layout";
import Session from "@/components/news/session";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const SessionNewsPage = () => {
  return (
    <Layout
      pageTitle="당회소식"
      title="당회소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={newsInnerMenus}
    >
      <Session />
    </Layout>
  );
};

export default SessionNewsPage;
