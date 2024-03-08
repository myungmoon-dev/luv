import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationToddlersPage = () => {
  return (
    <Layout
      title="유치부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={educationInnerMenus}
    >
      <div>EducationToddlersPage</div>
    </Layout>
  );
};

export default EducationToddlersPage;
