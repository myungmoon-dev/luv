import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";
import { useGetYoutubeList } from "@/query/youtube";

const SermonsYouthPage = () => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "youth" });
  return (
    <Layout
      pageTitle="청년 예배"
      title="청년 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/설교찬양2.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer title="청년 예배" list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default SermonsYouthPage;
