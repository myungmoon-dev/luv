import Bibles from "@/components/bibles";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const DiscipleShipBiblesPage = () => {
  const { push } = useRouter();

  return (
    <Layout title="성경통독">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="성경통독"
          description="성경통독 자료를 등록하고 수정할 수 있습니다"
          actions={
            <Button onClick={() => push("/bibles/create")}>
              <Plus className="mr-2 size-4" />
              추가
            </Button>
          }
        />
        <Bibles />
      </div>
    </Layout>
  );
};

export default DiscipleShipBiblesPage;
