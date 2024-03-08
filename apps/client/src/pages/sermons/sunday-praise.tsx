import React from "react";

import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";

const SermonsSundayPraisePage = () => {
  return (
    <Layout
      title="주일찬양예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <div>SermonsSundayPraisePage</div>
    </Layout>
  );
};

export default SermonsSundayPraisePage;
