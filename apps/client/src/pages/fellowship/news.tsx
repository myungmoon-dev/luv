import React from "react";

import Layout from "@/components/layout";
import { fellowshipInnerMenus } from "@/constants/innerMenus/fellowship";

const FellowshipNewsPage = () => {
  return (
    <Layout
      title="명문소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={fellowshipInnerMenus}
    >
      <div>FellowshipNewsPage</div>
    </Layout>
  );
};

export default FellowshipNewsPage;
