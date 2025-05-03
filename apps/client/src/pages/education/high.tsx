import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationHighPage = () => {
  return (
    <Layout
      pageTitle="고등부"
      title="고등부"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/high/banner.jpeg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="high" />
    </Layout>
  );
};

export default EducationHighPage;
