import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Spinner } from "ui";
import SermonComponent from "@/components/sermons/sermon";
import { useGetYoutubeList } from "@/query/youtube";

const SermonsYouthPage = () => {
  const { data: youtubeList } = useGetYoutubeList({ videoType: "youth" });
  return (
    <Layout
      pageTitle="젊은이 예배"
      title="젊은이 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermons.jpeg"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {youtubeList ? <SermonComponent list={youtubeList} /> : <Spinner />}
      </div>
    </Layout>
  );
};

export default SermonsYouthPage;
