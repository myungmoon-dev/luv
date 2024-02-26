import React from "react";

import Layout from "@/components/layout";

const VisionChapelPage = () => {
  return (
    <Layout
      title="비전채플 예배당"
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
      <div>VisionChapelPage</div>
    </Layout>
  );
};

export default VisionChapelPage;
