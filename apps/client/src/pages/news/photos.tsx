import Layout from "@/components/layout";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import React from "react";

const PhotosPage = () => {
  return (
    <Layout
      title="교회 앨범"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={newsInnerMenus}
    >
      <div>PhotosPage</div>
    </Layout>
  );
};

export default PhotosPage;
