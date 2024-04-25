import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import NotPrepared from "@/components/layout/notPrepared";

const EducationYoungAdults2Page = () => {
  return (
    <Layout
      pageTitle="2청년부"
      title="2청년부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/다음세대.jpg"
      innerMenus={educationInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default EducationYoungAdults2Page;
