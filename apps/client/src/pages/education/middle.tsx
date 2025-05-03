import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationMiddlePage = () => {
  return (
    <Layout
      pageTitle="중등부"
      title="중등부"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/middle/banner.jpeg"
      bannerImgClass="object-[50%_90%]"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="middle" />
    </Layout>
  );
};

export default EducationMiddlePage;
