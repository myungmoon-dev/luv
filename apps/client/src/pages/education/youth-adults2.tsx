import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import NotPrepared from "@/components/layout/notPrepared";

const EducationYoungAdults2Page = () => {
  return (
    <Layout
      pageTitle="2청년"
      title="2청년"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/flower_blue.jpg"
      innerMenus={educationInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default EducationYoungAdults2Page;
