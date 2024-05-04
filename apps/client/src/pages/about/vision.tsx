import AboutLogoWithVision from "@/components/about/logoVision";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";

const AboutVisionPage = () => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
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
