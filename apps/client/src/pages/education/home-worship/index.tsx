import HomeWorship from "@/components/education/homeWorship";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const HomeWorshipPage = () => {
  return (
    <Layout
      pageTitle="가정예배 인증"
      title="가정예배 인증"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <HomeWorship />
    </Layout>
  );
};

export default HomeWorshipPage;
