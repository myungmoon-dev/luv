import React from "react";
import Layout from "@/components/layout";
import Policy from "@/components/policy";

const PolicyPage = () => {
  return (
    <Layout
      pageTitle="홈페이지 정책"
      title="홈페이지 정책"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/home/banner2.jpeg"
      bannerImgClass=""
    >
      <Policy />
    </Layout>
  );
};

export default PolicyPage;
