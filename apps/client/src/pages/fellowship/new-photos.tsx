import React from "react";

import Layout from "@/components/layout";
import { fellowshipInnerMenus } from "@/constants/innerMenus/fellowship";

const FellowshipNewPhotosPage = () => {
  return (
    <Layout
      title="새가족 앨범"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={fellowshipInnerMenus}
    >
      <div>FellowshipNewPhotosPage</div>
    </Layout>
  );
};

export default FellowshipNewPhotosPage;
