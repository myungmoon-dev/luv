import BookCreate from "@/components/books/create";
import Layout from "@/components/layout";

const BookCreatePage = () => {
  return (
    <Layout title="추천 도서 추가">
      <BookCreate />
    </Layout>
  );
};

export default BookCreatePage;
