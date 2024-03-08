import Layout from "@/components/layout";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import React from "react";

const MissionNewsPage = () => {
  return (
    <Layout
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={newsInnerMenus}
    >
      <div>MissionNewsPage</div>
    </Layout>
  );
};

export default MissionNewsPage;
