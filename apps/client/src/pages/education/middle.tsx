import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

const EducationMiddlePage = () => {
  return (
    <Layout
      pageTitle="중등부"
      title="중등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/다음세대.jpg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="middle" />
    </Layout>
  );
};

export default EducationMiddlePage;
