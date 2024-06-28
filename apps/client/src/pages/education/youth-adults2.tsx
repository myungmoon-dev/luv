import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/2youth/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationYoungAdults2PageProps {
  bannerBlurDataURL: string;
}

const EducationYoungAdults2Page = ({ bannerBlurDataURL }: IEducationYoungAdults2PageProps) => {
  return (
    <Layout
      pageTitle="M'embers"
      title="M'embers"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/2youth/banner.jpg"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="2youth" />
    </Layout>
  );
};

export default EducationYoungAdults2Page;
