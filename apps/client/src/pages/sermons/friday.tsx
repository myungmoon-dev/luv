import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";

const SermonsFridayPage = () => {
  const { data, isRefetching } = useGetYoutubeLink("firday");

  if (isRefetching) return <Spinner />;

  return (
    <Layout
      pageTitle="금요기도회"
      title="금요기도회"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/sermon/banner2.jpg"
      bannerImgClass="object-[50%_30%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="금요 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsFridayPage;
