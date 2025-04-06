import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationHighPage = () => {
  return (
    <Layout
      pageTitle="고등부"
      title="고등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/high/banner.jpeg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="high" />
    </Layout>
  );
};

export default EducationHighPage;
