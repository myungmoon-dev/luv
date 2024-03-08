import React from "react";

import Layout from "@/components/layout";
import { leadershipInnerMenus } from "@/constants/innerMenus/leadership";

const LeadershipLeadPage = () => {
  return (
    <Layout
      title="담임 목사"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={leadershipInnerMenus}
    >
      <div>LeadershipLeadPage</div>
    </Layout>
  );
};

export default LeadershipLeadPage;
