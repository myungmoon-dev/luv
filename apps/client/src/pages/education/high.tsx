import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

const EducationHighPage = () => {
  return (
    <Layout
      pageTitle="고등부"
      title="고등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/high/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="high" />
    </Layout>
  );
};

export default EducationHighPage;
