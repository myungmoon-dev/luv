import HomeWorshipCreate from "@/components/education/homeWorship/create";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const HomeWorshipCreatePage = () => {
  return (
    <Layout
      pageTitle="가정예배 인증"
      title="가정예배 인증"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
      mustLogin={true}
    >
      <HomeWorshipCreate />
    </Layout>
  );
};

export default HomeWorshipCreatePage;
