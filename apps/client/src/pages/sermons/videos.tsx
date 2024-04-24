import React from "react";
import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";
import { useGetYoutubeList } from "@/query/youtube";

const VideosPage = () => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "video" });

  return (
    <Layout
      pageTitle="명문 영상"
      title="명문영상"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/common/sermon.jpg"
      bannerImgClass="object-[100%_12%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer title="명문 영상" list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default VideosPage;
