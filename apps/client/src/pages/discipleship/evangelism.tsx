import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipEvangelismPage = () => {
  return (
    <Layout
      title="행복 전도대"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div>DiscipleshipEvangelismPage</div>
    </Layout>
  );
};

export default DiscipleshipEvangelismPage;
