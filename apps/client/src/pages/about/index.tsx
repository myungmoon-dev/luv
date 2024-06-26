import AboutIntroduction from "@/components/about/introduction";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import React from "react";

const AboutIndexPage = () => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <AboutIntroduction />
    </Layout>
  );
};

export default AboutIndexPage;
