import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipIndexPage = () => {
  return (
    <Layout
      title="전체 안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div>DiscipleshipIndexPage</div>
    </Layout>
  );
};

export default DiscipleshipIndexPage;
