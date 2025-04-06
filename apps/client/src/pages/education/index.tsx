import EducationCoreValuesSection from "@/components/education/section/corevalues";
import EducationMissionSection from "@/components/education/section/mission";
import EducationVisionSection from "@/components/education/section/vision";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationPage = () => {
  return (
    <Layout
      pageTitle="다음세대 사역안내"
      title="다음세대 사역안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="mb-20 flex w-full flex-col items-center justify-center gap-10 overflow-hidden md:gap-16 lg:gap-20">
        <EducationMissionSection />
        <EducationVisionSection />
        <EducationCoreValuesSection />
      </div>
    </Layout>
  );
};

export default EducationPage;
