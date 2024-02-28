import React from "react";

import Layout from "@/components/layout";

const DiscipleshipIndexPage = () => {
  return (
    <Layout
      title="전체 안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={[
        { label: "전체 안내", path: "/discipleship" },
        { label: "행복 전도대", path: "/discipleship/evangelism" },
        { label: "구역장 교육", path: "/discipleship/leader" },
        { label: "새가족 교육", path: "/discipleship/new" },
        { label: "신혼가정", path: "/discipleship/newlyweds" },
        { label: "성경통독", path: "/discipleship/bible" },
      ]}
    >
      <div>DiscipleshipIndexPage</div>
    </Layout>
  );
};

export default DiscipleshipIndexPage;
