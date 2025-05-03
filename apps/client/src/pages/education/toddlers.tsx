import EducationOverView from "@/components/education/overview";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationToddlersPage = () => {
  return (
    <Layout
      pageTitle="유치부"
      title="유치부"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/toddlers/banner.jpg"
      bannerImgClass="object-[50%_70%]"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="toddlers" />
    </Layout>
  );
};

export default EducationToddlersPage;
