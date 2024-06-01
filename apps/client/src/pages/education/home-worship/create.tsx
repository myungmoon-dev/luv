import HomeWorshipCreate from "@/components/education/homeWorship/create";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const HomeWorshipCreatePage = () => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <HomeWorshipCreate />
    </Layout>
  );
};

export default HomeWorshipCreatePage;
