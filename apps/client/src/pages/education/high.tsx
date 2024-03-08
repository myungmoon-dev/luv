import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import NotPrepared from "@/components/layout/notPrepared";

const EducationHighPage = () => {
  return (
    <Layout
      title="고등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={educationInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default EducationHighPage;
