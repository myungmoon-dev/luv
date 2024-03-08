import React from "react";

import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import NotPrepared from "@/components/layout/notPrepared";

const AboutHistoryPage = () => {
  return (
    <Layout
      title="연혁"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={aboutInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default AboutHistoryPage;
