import Layout from "@/components/layout";
import Books from "@/components/news/books";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const BooksPage = () => {
  return (
    <Layout
      pageTitle="추천 도서"
      title="추천 도서"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/books/banner.png"
      innerMenus={discipleshipInnerMenus}
    >
      <Books />
    </Layout>
  );
};

export default BooksPage;
