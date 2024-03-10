import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import React from "react";

const PhotosPage = () => {
  return (
    <Layout
      pageTitle="교회 앨범"
      title="교회 앨범"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={newsInnerMenus}
    >
      <NotPrepared />
    </Layout>
  );
};

export default PhotosPage;
