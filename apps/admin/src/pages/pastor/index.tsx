import Layout from "@/components/layout";
import PastorBooks from "@/components/pastor";
import PastorProfile from "@/components/pastor/PastorProfile";
import { PageHeader } from "@/components/admin/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PastorPage = () => {
  return (
    <Layout title="섬기는 분들">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="담임목사 프로필"
          description="담임목사님 프로필을 관리합니다"
        />
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">담임목사 프로필</TabsTrigger>
            <TabsTrigger value="books">저서</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-4">
            <PastorProfile />
          </TabsContent>
          <TabsContent value="books" className="mt-4">
            <PastorBooks />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PastorPage;
