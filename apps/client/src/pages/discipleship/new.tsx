import React from "react";

import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import NotPrepared from "@/components/layout/notPrepared";

const DiscipleshipNewPage = () => {
  return (
    <Layout
      pageTitle="새가족 교육"
      title="새가족 교육"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default DiscipleshipNewPage;
