import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Spinner } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";

const VideosPage = () => {
  const { data, isRefetching } = useGetYoutubeLink("video");

  if (isRefetching) return <Spinner />;

  return (
    <Layout
      pageTitle="명문 영상"
      title="명문영상"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/sermon/banner.jpg"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="명문 영상" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default VideosPage;
