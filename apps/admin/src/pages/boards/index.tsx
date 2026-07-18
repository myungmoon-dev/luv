import BoardList from "@/components/board";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";

const BoardsPage = () => {
  return (
    <Layout title="게시판">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader title="게시판" description="게시글을 등록하고 수정할 수 있습니다" />
        <BoardList />
      </div>
    </Layout>
  );
};

export default BoardsPage;
