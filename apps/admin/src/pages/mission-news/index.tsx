import MissionNewsList from "@/components/missionNews";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";

const MissionNewsPage = () => {
  return (
    <Layout title="선교지 소식">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="선교지 소식"
          description="선교지 소식을 등록하고 수정할 수 있습니다"
        />
        <MissionNewsList />
      </div>
    </Layout>
  );
};

export default MissionNewsPage;
