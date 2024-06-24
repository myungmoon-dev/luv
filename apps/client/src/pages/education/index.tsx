import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationMissionSection from "@/components/education/section/mission";
import EducationVisionSection from "@/components/education/section/vision";
import EducationCoreValuesSection from "@/components/education/section/corevalues";
import path from "path";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationPageProps {
  bannerBlurDataURL: string;
}

const EducationPage = ({ bannerBlurDataURL }: IEducationPageProps) => {
  return (
    <Layout
      pageTitle="다음세대 사역안내"
      title="다음세대 사역안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
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
