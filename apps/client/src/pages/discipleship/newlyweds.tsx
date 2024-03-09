import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import NotPrepared from "@/components/layout/notPrepared";

const DiscipleshipNewlywedsPage = () => {
  return (
    <Layout
      title="신혼가정"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default DiscipleshipNewlywedsPage;
