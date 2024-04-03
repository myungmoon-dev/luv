import Layout from "@/components/layout";
import SermonComponent from "@/components/sermons/sermon";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { useGetYoutubeList } from "@/query/youtube";
import { Spinner } from "ui";

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
        {youtubeList ? <SermonComponent list={youtubeList} /> : <Spinner />}
      </div>
    </Layout>
  );
};

export default SermonsFridayPage;
