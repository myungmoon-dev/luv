import Layout from "@/components/layout";
import Books from "@/components/news/books";
import { newsInnerMenus } from "@/constants/innerMenus/news";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";
import React from "react";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/bulletins/banner.JPG");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IBooksPageProps {
  bannerBlurDataURL: string;
}

const BooksPage = ({ bannerBlurDataURL }: IBooksPageProps) => {
  return (
    <Layout
      pageTitle="추천 도서"
      title="추천 도서"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/bulletins/banner.JPG"
      innerMenus={newsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Books />
    </Layout>
  );
};

export default BooksPage;
