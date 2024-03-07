import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationPrimaryPage = () => {
  return (
    <Layout
      title="유년부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={educationInnerMenus}
    >
      <div>EducationPrimaryPage</div>
    </Layout>
  );
};

export default EducationPrimaryPage;
