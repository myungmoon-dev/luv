import Layout from "@/components/layout";
import Books from "@/components/news/books";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/books/banner.png");

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
      bannerImage="/images/discipleship/books/banner.png"
      innerMenus={discipleshipInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Books />
    </Layout>
  );
};

export default BooksPage;
