import EducationOverView from "@/components/education/overview";
import EducationMenusSection from "@/components/education/section/menus";
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
      <div className="mb-10 w-full gap-3 px-4">
        <EducationMenusSection />
      </div>
      <EducationOverView type="toddlers" />
    </Layout>
  );
};

export default EducationToddlersPage;
