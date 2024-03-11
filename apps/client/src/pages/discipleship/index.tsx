import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import NotPrepared from "@/components/layout/notPrepared";

const DiscipleshipIndexPage = () => {
  return (
    <Layout
      pageTitle="전체 안내"
      title="전체 안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default DiscipleshipIndexPage;
