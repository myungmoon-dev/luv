import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationElemantaryPageProps {
  bannerBlurDataURL: string;
}

const EducationElementaryPage = ({ bannerBlurDataURL }: IEducationElemantaryPageProps) => {
  return (
    <Layout
      pageTitle="예빛"
      title="예빛"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="elementary" />
    </Layout>
  );
};

export default EducationElementaryPage;
