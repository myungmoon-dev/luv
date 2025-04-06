import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Spinner } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";

const SermonsWednesdayPage = () => {
  const { data, isRefetching } = useGetYoutubeLink("wednesday");

  if (isRefetching) return <Spinner />;
  return (
    <Layout
      pageTitle="수요 예배"
      title="수요 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner2.jpg"
      bannerImgClass="object-[50%_30%]"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="수요 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsWednesdayPage;
