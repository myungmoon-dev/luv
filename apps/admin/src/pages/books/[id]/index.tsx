import BookDetail from "@/components/books/detail";
import Layout from "@/components/layout";

const BookPage = () => {
  return (
    <Layout title="추천 도서 상세">
      <BookDetail />
    </Layout>
  );
};

export default BookPage;
