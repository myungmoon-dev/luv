import Album from "@/components/album";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const HomeAlbumList = () => {
  const { push, asPath } = useRouter();

  return (
    <Layout
      title="앨범"
      titleChildren={
        <Button
          onClick={() => {
            push(`${asPath}/create`);
          }}
          className="rounded-md bg-blue-600 p-2 px-3 font-bold"
        >
          앨범 추가
        </Button>
      }
    >
      <Album />
    </Layout>
  );
};

export default HomeAlbumList;
