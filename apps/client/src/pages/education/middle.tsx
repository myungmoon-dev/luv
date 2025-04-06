import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationMiddlePage = () => {
  return (
    <Layout
      pageTitle="중등부"
      title="중등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/middle/banner.jpeg"
      bannerImgClass="object-[50%_90%]"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="middle" />
    </Layout>
  );
};

export default EducationMiddlePage;
