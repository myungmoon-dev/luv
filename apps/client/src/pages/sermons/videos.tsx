import React from "react";

import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";

const VideosPage = () => {
  return (
    <Layout
      title="명문영상"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <div>VideosPage</div>
    </Layout>
  );
};

export default VideosPage;