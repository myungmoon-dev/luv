import EducationOverView from "@/components/education/overview";
import EducationMenusSection from "@/components/education/section/menus";
import EducationMissionSection from "@/components/education/section/mission";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";

const EducationInfantsPage = () => {
  return (
    <Layout pageTitle="영아부" title="영아부" bannerDescription="보라 내가 반드시 길을 내리라!">
      <div className="hidden lg:block">
        <EducationMissionSection />
      </div>
      <div className="mb-10 flex w-full justify-center px-2 lg:px-20 lg:py-20">
        <EducationMenusSection />
      </div>
      <EducationOverView type="infants" />
    </Layout>
  );
};

export default EducationInfantsPage;
