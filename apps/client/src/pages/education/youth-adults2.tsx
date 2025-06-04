import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationYoungAdults2Page = () => {
  return (
    <Layout
      pageTitle="청년부"
      title="청년부"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/2youth/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="2youth" />
    </Layout>
  );
};

export default EducationYoungAdults2Page;
