import Layout from "@/components/layout";
import { Spinner, YoutubeVideo } from "ui";

import { useGetYoutubeLink } from "@/query/youtube";
import { Suspense } from "@suspensive/react";
import MainSermonSection from "@/components/sermons/mainSermonSection";
import SubSermonSection from "@/components/sermons/subSermonSection";

const SermonsIndexPage = () => {
  return (
    <Suspense
      clientOnly
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <SermonsIndexPageSection />
    </Suspense>
  );
};

const SermonsIndexPageSection = () => {
  const mainQuery = useGetYoutubeLink("main");
  const afternoonQuery = useGetYoutubeLink("afternoon");
  const wednesdayQuery = useGetYoutubeLink("wednesday");
  const fridayQuery = useGetYoutubeLink("firday");
  const youthQuery = useGetYoutubeLink("youth");
  const videoQuery = useGetYoutubeLink("video");

  const queries = [mainQuery, afternoonQuery, wednesdayQuery, fridayQuery, youthQuery, videoQuery];

  const isLoading = queries.some((query) => query.isRefetching);
  const hasData = queries.every((query) => query.data);

  if (
    isLoading ||
    !hasData ||
    !mainQuery.data ||
    !afternoonQuery.data ||
    !wednesdayQuery.data ||
    !fridayQuery.data ||
    !youthQuery.data ||
    !videoQuery.data
  )
    return <Spinner />;

  return (
    <Layout pageTitle="설교 찬양" title="설교 찬양">
      <div className="flex flex-col gap-5">
        <MainSermonSection
          url="/sermons/sunday-3"
          video={mainQuery.data.videos[0]}
          sermonTitle="주일 예배"
          videoTitle="주일 3부예배"
        />
        <SubSermonSection
          videos={afternoonQuery.data.videos}
          sermonTitle="오후 찬양 예배"
          videoTitle="오후 찬양 예배"
        />
        <SubSermonSection videos={wednesdayQuery.data.videos} sermonTitle="수요 예배" videoTitle="수요 예배" />
        <SubSermonSection
          videos={fridayQuery.data.videos}
          sermonTitle="미스바 금요 기도회"
          videoTitle="미스바 금요 기도회"
        />
        <SubSermonSection videos={youthQuery.data.videos} sermonTitle="청년 예배" videoTitle="청년 예배" />
        <SubSermonSection videos={videoQuery.data.videos} sermonTitle="WITH EL" videoTitle="찬양" />
      </div>
    </Layout>
  );
};

export default SermonsIndexPage;
