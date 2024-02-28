import React from "react";

import Layout from "@/components/layout";

const LeadershipLeadPage = () => {
  return (
    <Layout
      title="담임 목사"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={[
        { label: "원로 목사", path: "/leadership/senior" },
        { label: "담임 목사", path: "/leadership/lead" },
        { label: "교역자", path: "/leadership/ministers" },
        { label: "장로", path: "/leadership/elders" },
      ]}
    >
      <div>LeadershipLeadPage</div>
    </Layout>
  );
};

export default LeadershipLeadPage;
