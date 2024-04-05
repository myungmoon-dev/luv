import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";
import { useGetYoutubeList } from "@/query/youtube";

const SermonsFridayPage = () => {
  const { data: youtubeList } = useGetYoutubeList({ videoType: "firday" });
  return (
    <Layout
      pageTitle="금요기도회"
      title="금요기도회"
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

export default SermonsFridayPage;
