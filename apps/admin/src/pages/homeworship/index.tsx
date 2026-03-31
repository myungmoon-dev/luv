import HomeWorship from "@/components/homeworship";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";

const HomeWorshipPage = () => {
  return (
    <Layout title="가정예배 공지">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="가정예배 공지"
          description="가정예배 공지를 등록하고 수정할 수 있습니다"
        />
        <HomeWorship />
      </div>
    </Layout>
  );
};

export default HomeWorshipPage;
