import React from "react";
import Layout from "@/components/layout";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";
import Tabs from "@/components/layout/tabs";
import DiscipleshipPanorama from "@/components/discipleship/main/panorama/section";

const DiscipleshipMainPanoramaPage = () => {
  return (
    <Layout
      pageTitle="성경 파노라마"
      title="성경 파노라마"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/bibleBanner.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipPanorama />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainPanoramaPage;
