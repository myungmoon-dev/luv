import React from "react";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/infants/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationInfantsPageProps {
  bannerBlurDataURL: string;
}

const EducationInfantsPage = ({ bannerBlurDataURL }: IEducationInfantsPageProps) => {
  return (
    <Layout
      pageTitle="영아부"
      title="영아부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/infants/banner.jpg"
      innerMenus={educationInnerMenus}
      detailMenus={educationInfantsMenus}
      bannerImgClass="object-[50%_70%]"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="infants" />
    </Layout>
  );
};

export default EducationInfantsPage;
