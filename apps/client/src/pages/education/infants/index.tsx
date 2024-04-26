import React from "react";
import Layout from "@/components/layout";
import { educationInfantsMenus, educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

const EducationInfantsPage = () => {
  return (
    <Layout
      pageTitle="영아부"
      title="영아부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/banner.jpg"
      innerMenus={educationInnerMenus}
      detailMenus={educationInfantsMenus}
    >
      <EducationOverView type="infants" />
    </Layout>
  );
};

export default EducationInfantsPage;
