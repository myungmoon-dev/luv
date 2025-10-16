import EducationOverView from "@/components/education/overview";
import EducationMenusSection from "@/components/education/section/menus";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationElementaryPage = () => {
  return (
    <Layout
      pageTitle="유초등부"
      title="유초등부"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="mb-10 w-full gap-3 px-4">
        <EducationMenusSection />
      </div>
      <EducationOverView type="elementary" />
    </Layout>
  );
};

export default EducationElementaryPage;
