import Album from "@/components/album";
import Layout from "@/components/layout";
import { PageHeader } from "@/components/admin/page-header";

const HomeAlbumList = () => {
  return (
    <Layout title="앨범">
      <div className="flex flex-col gap-6 p-6">
        <PageHeader
          title="앨범"
          description="카테고리별 사진 앨범을 관리할 수 있습니다"
        />
        <Album />
      </div>
    </Layout>
  );
};

export default HomeAlbumList;
