import React from "react";

import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";

const EducationYoungAdults2Page = () => {
  return (
    <Layout
      title="2청년"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={educationInnerMenus}
    >
      <div>EducationYoungAdults2Page</div>
    </Layout>
  );
};

export default EducationYoungAdults2Page;