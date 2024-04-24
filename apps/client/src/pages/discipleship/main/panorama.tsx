import React from "react";

import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";
import Tabs from "@/components/layout/tabs";

const DiscipleshipMainPanoramaPage = () => {
  return (
    <Layout
      pageTitle="성경 파노라마"
      title="성경 파노라마"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/common/wave.jpg"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <NotPrepared />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainPanoramaPage;
