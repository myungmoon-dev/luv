import Layout from "@/components/layout";
import { Spinner, YoutubeVideo } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";
import dayjs from "dayjs";
import { IYoutube } from "type";
import MainVideoSection from "@/components/sermons/videos/mainVideoSection";

const SermonsSunday3Page = () => {
  const { data, isRefetching } = useGetYoutubeLink("main");

  if (isRefetching || !data) return <Spinner />;

  return (
    <Layout pageTitle="지난 예배" title="지난 예배">
      <div className="md:px-[30px] lg:px-[125px]">
        <div className="mb-[12px] flex items-center gap-[1px] pl-[22px] sm:mb-[26px] sm:gap-[12px] sm:pl-[35px] md:mb-[48px] md:w-full md:justify-between lg:mb-[40px]">
          <p className="text-[22px] font-bold text-[#222222] sm:text-[25px] lg:text-[30px]">지난 예배</p>
        </div>
        <div className="mb-[20px] flex w-full flex-col gap-5">
          {data.videos.map((video) => (
            <MainVideoSection video={video} key={video._id} title="주일예배" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SermonsSunday3Page;
