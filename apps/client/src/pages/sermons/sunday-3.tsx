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
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
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
