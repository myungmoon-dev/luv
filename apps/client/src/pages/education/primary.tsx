import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import NotPrepared from "@/components/layout/notPrepared";

const EducationPrimaryPage = () => {
  return (
    <Layout
      pageTitle="유년부"
      title="유년부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/next-g.jpeg"
      innerMenus={educationInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default EducationPrimaryPage;
