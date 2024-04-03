import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { useGetYoutubeList } from "@/query/youtube";
import SermonComponent from "@/components/sermons/sermon";
import { Spinner } from "ui";

const SermonsSunday3Page = () => {
  const { data: youtubeList } = useGetYoutubeList({ videoType: "main" });

  return (
    <Layout
      pageTitle="주일 3부 예배"
      title="주일 3부 예배"
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

export default SermonsSunday3Page;
