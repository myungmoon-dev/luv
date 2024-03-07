import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipLeaderPage = () => {
  return (
    <Layout
      title="구역장 교육"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div>DiscipleshipLeaderPage</div>
    </Layout>
  );
};

export default DiscipleshipLeaderPage;
