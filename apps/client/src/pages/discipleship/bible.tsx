import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipBiblePage = () => {
  return (
    <Layout
      title="성경통독"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div>DiscipleshipBiblePage</div>
    </Layout>
  );
};

export default DiscipleshipBiblePage;
