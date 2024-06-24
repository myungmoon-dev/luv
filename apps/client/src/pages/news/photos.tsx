import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import React from "react";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/banner2.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IPhotosPageProps {
  bannerBlurDataURL: string;
}

const PhotosPage = ({ bannerBlurDataURL }: IPhotosPageProps) => {
  return (
    <Layout
      pageTitle="교회 앨범"
      title="교회 앨범"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner2.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={newsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <NotPrepared />
    </Layout>
  );
};

export default PhotosPage;
