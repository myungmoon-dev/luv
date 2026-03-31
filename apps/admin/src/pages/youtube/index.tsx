import Layout from "@/components/layout";
import Youtube from "@/components/youtube";
import { PageHeader } from "@/components/admin/page-header";

const YoutubePage = () => {
  return (
    <Layout title="유튜브">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="유튜브"
          description="예배 유형별 유튜브 영상을 관리할 수 있습니다"
        />
        <Youtube />
      </div>
    </Layout>
  );
};

export default YoutubePage;
