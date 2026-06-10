import Layout from "@/components/layout";
import Ministers from "@/components/minister";
import { PageHeader } from "@/components/admin/page-header";

const LeadershipPage = () => {
  return (
    <Layout title="섬기는 분들">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="섬기는 분들 관리"
          description="교역자/장로/선교사/직원 프로필을 관리합니다"
        />
        <Ministers />
      </div>
    </Layout>
  );
};

export default LeadershipPage;
