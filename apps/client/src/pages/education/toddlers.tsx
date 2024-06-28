import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/toddlers/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationToddlersPageProps {
  bannerBlurDataURL: string;
}

const EducationToddlersPage = ({ bannerBlurDataURL }: IEducationToddlersPageProps) => {
  return (
    <Layout
      pageTitle="유치부"
      title="유치부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/toddlers/banner.jpg"
      bannerImgClass="object-[50%_70%]"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="toddlers" />
    </Layout>
  );
};

export default EducationToddlersPage;
