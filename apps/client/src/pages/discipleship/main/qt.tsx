import React from "react";
import Layout from "@/components/layout";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";
import Tabs from "@/components/layout/tabs";
import DiscipleshipQt from "@/components/discipleship/main/qt";

const DiscipleshipMainQtPage = () => {
  return (
    <Layout
      pageTitle="큐티 세미나"
      title="큐티 세미나"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/qt/banner.jpg"
      bannerImgClass="object-[50%_50%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipQt />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainQtPage;
