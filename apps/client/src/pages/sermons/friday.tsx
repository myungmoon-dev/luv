import React from "react";

import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";

const SermonsFridayPage = () => {
  return (
    <Layout
      title="금요기도회"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <div>SermonsFridayPage</div>
    </Layout>
  );
};

export default SermonsFridayPage;
