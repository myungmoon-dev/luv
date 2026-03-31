import Layout from "@/components/layout";
import MissionNewsList from "@/components/missionNews";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const MissionNewsPage = () => {
  const { push } = useRouter();

  return (
    <Layout title="선교지 소식">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="선교지 소식"
          description="선교지 소식을 등록하고 수정할 수 있습니다"
          actions={
            <Button onClick={() => push("/mission-news/create")}>
              <Plus className="mr-2 size-4" />
              추가
            </Button>
          }
        />
        <MissionNewsList />
      </div>
    </Layout>
  );
};

export default MissionNewsPage;
