import AboutIntroduction from "@/components/about/introduction";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/about/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IAboutPageProps {
  bannerBlurDataURL: string;
}

const AboutPage = ({ bannerBlurDataURL }: IAboutPageProps) => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <AboutIntroduction />
    </Layout>
  );
};

export default AboutPage;
