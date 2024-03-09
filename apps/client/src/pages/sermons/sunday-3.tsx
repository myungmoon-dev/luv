import React from "react";

import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import NotPrepared from "@/components/layout/notPrepared";

const SermonsSunday3Page = () => {
  return (
    <Layout
      title="주일 3부 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default SermonsSunday3Page;
