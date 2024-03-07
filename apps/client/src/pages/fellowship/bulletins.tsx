import React from "react";

import Layout from "@/components/layout";
import { fellowshipInnerMenus } from "@/constants/innerMenus/fellowship";

const FellowshipBulletinsPage = () => {
  return (
    <Layout
      title="주보"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={fellowshipInnerMenus}
    >
      <div>FellowshipBulletinsPage</div>
    </Layout>
  );
};

export default FellowshipBulletinsPage;
