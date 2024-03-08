import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipNewPage = () => {
  return (
    <Layout
      title="새가족 교육"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div>DiscipleshipNewPage</div>
    </Layout>
  );
};

export default DiscipleshipNewPage;
