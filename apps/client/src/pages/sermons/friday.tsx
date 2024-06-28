import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";
import { useGetYoutubeList } from "@/query/youtube";

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

interface ISermonsFridayPageProps {
  bannerBlurDataURL: string;
}

const SermonsFridayPage = ({ bannerBlurDataURL }: ISermonsFridayPageProps) => {
  const { data: youtubeList, isLoading } = useGetYoutubeList({ videoType: "firday" });
  return (
    <Layout
      pageTitle="금요기도회"
      title="금요기도회"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner2.jpg"
      bannerImgClass="object-[50%_30%]"
      innerMenus={sermonsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <div className="flex items-center justify-center">
        {isLoading ? <Spinner /> : <SermonContainer title="금요 예배" list={youtubeList || []} />}
      </div>
    </Layout>
  );
};

export default SermonsFridayPage;
