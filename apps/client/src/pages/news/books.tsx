import Layout from "@/components/layout";
import Books from "@/components/news/books";

const BooksPage = () => {
  return (
    <Layout pageTitle="추천 도서" title="추천 도서" customBanner={<></>} hasChildrenPadding={false}>
      <Books />
    </Layout>
  );
};

export default BooksPage;
