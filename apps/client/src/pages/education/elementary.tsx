import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

const EducationElementaryPage = () => {
  return (
    <Layout
      pageTitle="예빛"
      title="예빛"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="elementary" />
    </Layout>
  );
};

export default EducationElementaryPage;
