import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Spinner } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";

const SermonsSunday3Page = () => {
  const { data, isRefetching } = useGetYoutubeLink("main");

  if (isRefetching) return <Spinner />;

  return (
    <Layout
      pageTitle="주일 예배"
      title="주일 예배"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/sermon/banner4.jpg"
      bannerImgClass="object-[70%_30%] 2xl:object-[50%_35%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="주일 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsSunday3Page;
