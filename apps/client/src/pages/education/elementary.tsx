import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

const EducationElementaryPage = () => {
  return (
    <Layout
      pageTitle="초등부"
      title="초등부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/next-g.jpeg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="elementary" />
    </Layout>
  );
};

export default EducationElementaryPage;
