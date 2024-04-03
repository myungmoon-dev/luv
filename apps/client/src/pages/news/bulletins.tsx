import React from "react";

import { newsInnerMenus } from "@/constants/innerMenus/news";
import Layout from "@/components/layout";
import Bulletins from "@/components/news/bulletins";

const BulletinsPage = () => {
  return (
    <Layout
      pageTitle="주보"
      title="주보"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={newsInnerMenus}
    >
      <Bulletins />
    </Layout>
  );
};

export default BulletinsPage;
