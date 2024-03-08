import Layout from "@/components/layout";
import React from "react";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const LeadershipPage = () => {
  return (
    <Layout
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={aboutInnerMenus}
    >
      <div>vision</div>
    </Layout>
  );
};

export default LeadershipPage;
