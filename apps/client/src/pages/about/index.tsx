import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/About";
import React from "react";

const AboutIndexPage = () => {
  return (
    <Layout
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={aboutInnerMenus}
    >
      <div>AboutIndexPage</div>
    </Layout>
  );
};

export default AboutIndexPage;
