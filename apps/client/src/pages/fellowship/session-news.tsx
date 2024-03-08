import React from "react";

import Layout from "@/components/layout";
import { fellowshipInnerMenus } from "@/constants/innerMenus/fellowship";

const FellowshipSessionNewsPage = () => {
  return (
    <Layout
      title="당회소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={fellowshipInnerMenus}
    >
      <div>FellowshipSessionNewsPage</div>
    </Layout>
  );
};

export default FellowshipSessionNewsPage;
