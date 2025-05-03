import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationElementaryPage = () => {
  return (
    <Layout
      pageTitle="예빛"
      title="예빛"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="elementary" />
    </Layout>
  );
};

export default EducationElementaryPage;
