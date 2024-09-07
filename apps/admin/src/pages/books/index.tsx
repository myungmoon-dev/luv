import Books from "@/components/books";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const BooksPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="추천 도서"
      titleChildren={<Button onClick={() => push("/books/create")}>추가</Button>}
    >
      <Books />
    </Layout>
  );
};

export default BooksPage;
