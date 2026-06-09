import Layout from "@/components/layout";
import Popups from "@/components/popups";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const PopupsPage = () => {
  const { push } = useRouter();

  return (
    <Layout title="팝업">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="팝업"
          description="공지와 알림 팝업을 관리할 수 있습니다"
          actions={
            <Button onClick={() => push("/popups/create")}>
              <Plus className="mr-2 size-4" />
              추가
            </Button>
          }
        />
        <Popups />
      </div>
    </Layout>
  );
};

export default PopupsPage;
