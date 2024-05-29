import React from "react";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import NotPrepared from "@/components/layout/notPrepared";

const Discipleship3040Page = () => {
  return (
    <Layout
      pageTitle="3040세대"
      title="3040세대"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/banner3.jpg"
      bannerImgClass="object-[100%_40%]"
      innerMenus={discipleshipInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default Discipleship3040Page;
