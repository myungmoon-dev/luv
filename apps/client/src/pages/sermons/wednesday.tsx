import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { useGetYoutubeList } from "@/query/youtube";
import { Spinner } from "ui";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/sermon/banner2.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface ISermonsWednesdayPageProps {
  bannerBlurDataURL: string;
}

const SermonsWednesdayPage = ({ bannerBlurDataURL }: ISermonsWednesdayPageProps) => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "wednesday" });
  return (
    <Layout
      pageTitle="수요 예배"
      title="수요 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner2.jpg"
      bannerImgClass="object-[50%_30%]"
      innerMenus={sermonsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer title="수요 예배" list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default SermonsWednesdayPage;
