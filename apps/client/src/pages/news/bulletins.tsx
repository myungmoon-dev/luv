import Layout from "@/components/layout";
import Bulletins from "@/components/news/bulletins";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const BulletinsPage = () => {
  return (
    <Layout
      pageTitle="주보"
      title="주보"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/bulletins/banner.JPG"
      innerMenus={newsInnerMenus}
    >
      <Bulletins />
    </Layout>
  );
};

export default BulletinsPage;
