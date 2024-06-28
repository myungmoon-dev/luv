import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/middle/banner.jpeg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationMiddlePageProps {
  bannerBlurDataURL: string;
}

const EducationMiddlePage = ({ bannerBlurDataURL }: IEducationMiddlePageProps) => {
  return (
    <Layout
      pageTitle="중등부"
      title="중등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/middle/banner.jpeg"
      bannerImgClass="object-[50%_90%]"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="middle" />
    </Layout>
  );
};

export default EducationMiddlePage;
