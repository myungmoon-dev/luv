import React from "react";

import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const LoveChapelPage = () => {
  return (
    <Layout
      title="사랑채플 예배당"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={aboutInnerMenus}
    >
      <div>LoveChapelPage</div>
    </Layout>
  );
};

export default LoveChapelPage;
