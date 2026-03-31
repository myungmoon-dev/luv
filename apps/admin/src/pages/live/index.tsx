import Layout from "@/components/layout";
import Live from "@/components/live";
import { PageHeader } from "@/components/admin/page-header";

const LivePage = () => {
  return (
    <Layout title="실시간 생방송">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="실시간 생방송"
          description="실시간 유튜브 링크를 등록하고 수정할 수 있습니다"
        />
        <Live />
      </div>
    </Layout>
  );
};

export default LivePage;
