import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import NotPrepared from "@/components/layout/notPrepared";

const EducationMiddlePage = () => {
  return (
    <Layout
      pageTitle="중등부"
      title="중등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/next_g.jpeg"
      innerMenus={educationInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default EducationMiddlePage;
