import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import SermonContainer from "@/components/sermons/sermonContainer";
import { Spinner } from "ui";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";
import { useGetYoutubeLink } from "@/query/youtube";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/sermon/banner4.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface ISermonsSundayPraisePageProps {
  bannerBlurDataURL: string;
}

const SermonsSundayPraisePage = ({ bannerBlurDataURL }: ISermonsSundayPraisePageProps) => {
  const { data, isRefetching } = useGetYoutubeLink("afternoon");

  if (isRefetching) return <Spinner />;
  return (
    <Layout
      pageTitle="주일 오후찬양예배"
      title="주일 오후찬양예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner4.jpg"
      bannerImgClass="object-[70%_30%] 2xl:object-[50%_35%]"
      innerMenus={sermonsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="주일오후찬양 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsSundayPraisePage;
