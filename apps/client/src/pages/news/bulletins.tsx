import Layout from "@/components/layout";
import Bulletins from "@/components/news/bulletins";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const BulletinsPage = () => {
  return (
    <Layout
      pageTitle="주보"
      title="주보"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/news/bulletins/banner.JPG"
      innerMenus={newsInnerMenus}
    >
      <Bulletins />
    </Layout>
  );
};

export default BulletinsPage;
