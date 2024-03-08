import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationMiddlePage = () => {
  return (
    <Layout
      title="중드부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={educationInnerMenus}
    >
      <div>EducationMiddlePage</div>
    </Layout>
  );
};

export default EducationMiddlePage;
