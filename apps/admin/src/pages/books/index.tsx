import Books from "@/components/books";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const BooksPage = () => {
  const { push } = useRouter();

  return (
    <Layout title="추천 도서">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="추천 도서"
          description="추천 도서 목록을 등록하고 수정할 수 있습니다"
          actions={
            <Button onClick={() => push("/books/create")}>
              <Plus className="mr-2 size-4" />
              추가
            </Button>
          }
        />
        <Books />
      </div>
    </Layout>
  );
};

export default BooksPage;
