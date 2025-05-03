import Layout from "@/components/layout";
import Books from "@/components/news/books";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const BooksPage = () => {
  return (
    <Layout
      pageTitle="추천 도서"
      title="추천 도서"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/books/banner.png"
      innerMenus={discipleshipInnerMenus}
    >
      <Books />
    </Layout>
  );
};

export default BooksPage;
