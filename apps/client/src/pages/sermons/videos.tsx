import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { useGetYoutubeList } from "@/query/youtube";
import { Spinner } from "ui";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/sermon/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IVideosPageProps {
  bannerBlurDataURL: string;
}

const VideosPage = ({ bannerBlurDataURL }: IVideosPageProps) => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "video" });

  return (
    <Layout
      pageTitle="명문 영상"
      title="명문영상"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner.jpg"
      innerMenus={sermonsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer title="명문 영상" list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default VideosPage;
