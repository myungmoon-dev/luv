import Layout from "@/components/layout";
import Popups from "@/components/popups";
import PopupFormDialog from "@/components/popups/PopupFormDialog";
import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

const PopupsPage = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Layout title="팝업">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="팝업"
          description="팝업을 관리할 수 있습니다"
          actions={
            <Button onClick={() => setFormOpen(true)}>
              <Plus className="mr-2 size-4" />
              추가
            </Button>
          }
        />
        <Popups />
      </div>

      <PopupFormDialog open={formOpen} onClose={() => setFormOpen(false)} />
    </Layout>
  );
};

export default PopupsPage;
