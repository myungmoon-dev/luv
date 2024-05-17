import HomeWorship from "@/components/education/homeWorship";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const HomeWorshipPage = () => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <HomeWorship />
    </Layout>
  );
};

export default HomeWorshipPage;
