import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";

const SermonsSundayPraisePage = () => {
  const { data, isRefetching } = useGetYoutubeLink("afternoon");

  if (isRefetching) return <Spinner />;
  return (
    <Layout
      pageTitle="주일 오후찬양예배"
      title="주일 오후찬양예배"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/sermon/banner4.jpg"
      bannerImgClass="object-[70%_30%] 2xl:object-[50%_35%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="주일오후찬양 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsSundayPraisePage;
