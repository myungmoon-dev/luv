import React from "react";

import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";
import Tabs from "@/components/layout/tabs";

const DiscipleshipMainQtPage = () => {
  return (
    <Layout
      pageTitle="큐티 세미나"
      title="큐티 세미나"
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

export default DiscipleshipMainQtPage;
