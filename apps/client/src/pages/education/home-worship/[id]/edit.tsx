import HomeWorshipEdit from "@/components/education/homeWorship/edit";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const HomeWorshipEditPage = () => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <HomeWorshipEdit />
    </Layout>
  );
};

export default HomeWorshipEditPage;
