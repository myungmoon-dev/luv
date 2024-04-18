import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { useGetYoutubeList } from "@/query/youtube";
import { Spinner } from "ui";

const SermonsSunday3Page = () => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "main" });

  return (
    <Layout
      pageTitle="주일 3부 예배"
      title="주일 3부 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermons.jpeg"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default SermonsSunday3Page;
