import React from "react";

import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import NotPrepared from "@/components/layout/notPrepared";

const SermonsYouthPage = () => {
  return (
    <Layout
      pageTitle="젊은이 예배"
      title="젊은이 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default SermonsYouthPage;
