import Bulletins from "@/components/bulletins";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";

const BulletinsPage = () => {
  return (
    <Layout title="주보">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="주보"
          description="주간 주보를 등록하고 수정할 수 있습니다"
        />
        <Bulletins />
      </div>
    </Layout>
  );
};

export default BulletinsPage;
