import EducationOverView from "@/components/education/overview";
import EducationMenusSection from "@/components/education/section/menus";
import EducationMissionSection from "@/components/education/section/mission";
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
      <div className="hidden lg:block">
        <EducationMissionSection />
      </div>
      <div className="mb-10 flex w-full justify-center px-2 lg:px-20 lg:py-20">
        <EducationMenusSection />
      </div>
      <EducationOverView type="2youth" />
    </Layout>
  );
};

export default EducationYoungAdults2Page;
