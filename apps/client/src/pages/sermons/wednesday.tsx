import React from "react";

import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";

const SermonsWednesdayPage = () => {
  return (
    <Layout
      title="수요 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <div>SermonsWednesdayPage</div>
    </Layout>
  );
};

export default SermonsWednesdayPage;
