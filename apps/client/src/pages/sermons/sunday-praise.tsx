import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";
import { useGetYoutubeList } from "@/query/youtube";

const SermonsSundayPraisePage = () => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "afternoon" });
  return (
    <Layout
      pageTitle="주일 오후찬양예배"
      title="주일 오후찬양예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner4.jpg"
      bannerImgClass="object-[70%_30%] 2xl:object-[50%_35%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer title="주일 오후찬양예배" list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default SermonsSundayPraisePage;
