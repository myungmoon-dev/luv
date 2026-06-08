import CongregationNewsList from "@/components/congregation-news";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const CongregationNewsPage = () => {
  const { push } = useRouter();

  return (
    <Layout title="교우 소식">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="교우 소식"
          description="교우 소식을 등록하고 수정할 수 있습니다"
          actions={
            <Button onClick={() => push("/congregation-news/create")}>
              <Plus className="mr-2 size-4" />
              추가
            </Button>
          }
        />
        <CongregationNewsList />
      </div>
    </Layout>
  );
};

export default CongregationNewsPage;
