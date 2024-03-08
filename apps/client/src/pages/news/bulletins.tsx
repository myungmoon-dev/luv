import Layout from "@/components/layout";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import React from "react";

const BulletinsPage = () => {
  return (
    <Layout
      title="주보"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={newsInnerMenus}
    >
      <div>BulletinsPage</div>
    </Layout>
  );
};

export default BulletinsPage;
