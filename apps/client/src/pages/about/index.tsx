import Layout from "@/components/layout";
import React from "react";

const AboutIndexPage = () => {
  return (
    <Layout
      title="교회소개"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={[
        { label: "로고와 비전", path: "/about/vision" },
        { label: "연혁", path: "/about/history" },
        { label: "예배 안내", path: "/about/services" },
        { label: "비전채플 예배당", path: "/about/vision-chapel" },
        { label: "사랑채플 예배당", path: "/about/love-chapel" },
      ]}
    >
      <div>AboutIndexPage</div>
    </Layout>
  );
};

export default AboutIndexPage;
