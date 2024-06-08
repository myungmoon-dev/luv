import React from "react";
import Layout from "@/components/layout";
import { educationInnerMenus } from "@/constants/innerMenus/education";
import EducationOverView from "@/components/education/overview";

const EducationYoungAdults2Page = () => {
  return (
    <Layout
      pageTitle="M'embers"
      title="M'embers"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/education/2youth/banner.jpg"
      innerMenus={educationInnerMenus}
    >
      <EducationOverView type="2youth" />
    </Layout>
  );
};

export default EducationYoungAdults2Page;
