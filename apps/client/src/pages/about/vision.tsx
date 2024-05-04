import AboutLogoWithVision from "@/components/about/logoVision";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";

const AboutVisionPage = () => {
  return (
    <Layout
      pageTitle="로고와 비전"
      title="로고와 비전"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <AboutLogoWithVision />
    </Layout>
  );
};

export default AboutVisionPage;
