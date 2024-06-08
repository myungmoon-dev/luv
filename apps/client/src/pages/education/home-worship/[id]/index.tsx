import HomeWorshipDetail from "@/components/education/homeWorship/detail";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const DiscipleshipMainBibleDetailPage = () => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <HomeWorshipDetail />
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
