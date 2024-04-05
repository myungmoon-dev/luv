import React from "react";

import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";
import Tabs from "@/components/layout/tabs";

const DiscipleshipMainBiblePage = () => {
  return (
    <Layout
      pageTitle="성경통독"
      title="성경통독"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <NotPrepared />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainBiblePage;
