import Layout from "@/components/layout";
import React from "react";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import NotPrepared from "@/components/layout/notPrepared";

const AboutDirectionsPage = () => {
  return (
    <Layout
      pageTitle="오시는 길"
      title="오시는 길"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={aboutInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default AboutDirectionsPage;
