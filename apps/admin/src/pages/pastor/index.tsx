import Layout from "@/components/layout";
import PastorBooks from "@/components/pastor";
import { PageHeader } from "@/components/admin/page-header";

const PastorPage = () => {
  return (
    <Layout title="섬기는 분들">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="담임목사 저서"
          description="담임목사 저서 목록을 관리합니다"
        />
        <PastorBooks />
      </div>
    </Layout>
  );
};

export default PastorPage;
