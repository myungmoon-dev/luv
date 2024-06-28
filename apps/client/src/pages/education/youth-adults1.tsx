import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/1youth/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IEducationYoungAdults1PageProps {
  bannerBlurDataURL: string;
}

const EducationYoungAdults1Page = ({ bannerBlurDataURL }: IEducationYoungAdults1PageProps) => {
  return (
    <Layout
      pageTitle="1청년부"
      title="1청년부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/1youth/banner.jpg"
      bannerImgClass="object-[50%_70%]"
      innerMenus={educationInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <EducationOverView type="1youth" />
    </Layout>
  );
};

export default EducationYoungAdults1Page;
