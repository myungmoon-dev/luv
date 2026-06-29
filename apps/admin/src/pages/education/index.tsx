import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";
import Education from "@/components/education";
import EducationHomeForm from "@/components/education/EducationHomeForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EducationPage = () => (
  <Layout title="다음세대">
    <div className="flex flex-col gap-6 p-6">
      <PageHeader title="다음세대" description="다음세대 각 부서와 홈 콘텐츠를 관리합니다" />
      <Tabs defaultValue="departments">
        <TabsList>
          <TabsTrigger value="departments">부서 관리</TabsTrigger>
          <TabsTrigger value="home">홈 콘텐츠</TabsTrigger>
        </TabsList>
        <TabsContent value="departments" className="mt-4">
          <Education />
        </TabsContent>
        <TabsContent value="home" className="mt-4">
          <EducationHomeForm />
        </TabsContent>
      </Tabs>
    </div>
  </Layout>
);

export default EducationPage;
