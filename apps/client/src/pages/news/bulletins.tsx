import React from "react";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import Layout from "@/components/layout";
import Bulletins from "@/components/news/bulletins";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/bulletins/banner.JPG");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IBulletinsPageProps {
  bannerBlurDataURL: string;
}

const BulletinsPage = ({ bannerBlurDataURL }: IBulletinsPageProps) => {
  return (
    <Layout
      pageTitle="주보"
      title="주보"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/bulletins/banner.JPG"
      innerMenus={newsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Bulletins />
    </Layout>
  );
};

export default BulletinsPage;
