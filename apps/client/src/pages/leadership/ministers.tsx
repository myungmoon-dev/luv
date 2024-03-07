import React from "react";

import Layout from "@/components/layout";
import { leadershipInnerMenus } from "@/constants/innerMenus/leadership";

const LeadershipMinistersPage = () => {
  return (
    <Layout
      title="교역자"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={leadershipInnerMenus}
    >
      <div>LeadershipMinistersPage</div>
    </Layout>
  );
};

export default LeadershipMinistersPage;
