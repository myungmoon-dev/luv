import EducationOverView from "@/components/education/overview";
import EducationMenusSection from "@/components/education/section/menus";
import EducationMissionSection from "@/components/education/section/mission";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationElementaryPage = () => {
  return (
    <Layout
      pageTitle="유초등부"
      title="유초등부"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="hidden lg:block">
        <EducationMissionSection />
      </div>
      <div className="mb-10 flex w-full justify-center px-2 lg:px-20 lg:py-20">
        <EducationMenusSection />
      </div>
      <EducationOverView type="elementary" />
    </Layout>
  );
};

export default EducationElementaryPage;
