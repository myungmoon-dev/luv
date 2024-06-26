import AboutMinistryVision from "@/components/about/vision/ministryVision";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";

const AboutVisionPage = () => {
  return (
    <Layout
      pageTitle="목회비전"
      title="목회비전"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <AboutMinistryVision />
    </Layout>
  );
};

export default AboutVisionPage;
