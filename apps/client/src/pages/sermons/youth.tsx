import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Spinner } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";

const SermonsYouthPage = () => {
  const { data, isRefetching } = useGetYoutubeLink("youth");

  if (isRefetching) return <Spinner />;

  return (
    <Layout
      pageTitle="청년 예배"
      title="청년 예배"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/sermon/banner3.JPG"
      bannerImgClass="object-[50%_60%] xl:object-[50%_50%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="청년 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsYouthPage;
