import Layout from "@/components/layout";
import HomeImage from "@/components/home-manage/HomeImage";
import HomeYoutube from "@/components/home-manage/HomeYoutube";
import { PageHeader } from "@/components/admin/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage = () => {
  return (
    <Layout title="메인 페이지">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="메인 페이지"
          description="홈 화면 이미지 및 유튜브 링크를 관리합니다"
        />
        <Tabs defaultValue="image">
          <TabsList>
            <TabsTrigger value="image">이미지</TabsTrigger>
            <TabsTrigger value="youtube">유튜브 링크</TabsTrigger>
          </TabsList>
          <TabsContent value="image" className="mt-4">
            <HomeImage />
          </TabsContent>
          <TabsContent value="youtube" className="mt-4">
            <HomeYoutube />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default HomePage;
