import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { useGetYoutubeList } from "@/query/youtube";
import { Spinner } from "ui";

const SermonsWednesdayPage = () => {
  const { data: youtubeList } = useGetYoutubeList({ videoType: "wednesday" });
  return (
    <Layout
      pageTitle="수요 예배"
      title="수요 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermons.jpeg"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {youtubeList ? <SermonContainer list={youtubeList} /> : <Spinner />}
      </div>
    </Layout>
  );
};

export default SermonsWednesdayPage;
