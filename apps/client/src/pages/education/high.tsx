import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/high/banner.jpeg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationHighPageProps {
  bannerBlurDataURL: string;
}

const EducationHighPage = ({ bannerBlurDataURL }: IEducationHighPageProps) => {
  return (
    <Layout
      pageTitle="고등부"
      title="고등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/high/banner.jpeg"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="high" />
    </Layout>
  );
};

export default EducationHighPage;
