import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import Image from "next/image";
import EducationMissionSection from "@/components/education/section/mission";
import EducationSectionTitle from "@/components/education/index/title";
import EducationVisionSection from "@/components/education/section/vision";
import EducationCoreValuesSection from "@/components/education/section/corevalues";

const EducationIndexPage = () => {
  return (
    <Layout
      pageTitle="다음세대 사역안내"
      title="다음세대 사역안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sketch-3.jpg"
      innerMenus={educationInnerMenus}
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 lg:gap-20">
        <EducationMissionSection />
        <EducationVisionSection />
        <EducationCoreValuesSection />
      </div>
    </Layout>
  );
};

export default EducationIndexPage;
