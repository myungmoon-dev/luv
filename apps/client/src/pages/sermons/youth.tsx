import Layout from "@/components/layout";
import SermonContainer from "@/components/sermons/sermonContainer";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Spinner } from "ui";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";
import { useGetYoutubeLink } from "@/query/youtube";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/sermon/banner3.JPG");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface ISermonsYouthPageProps {
  bannerBlurDataURL: string;
}

const SermonsYouthPage = ({ bannerBlurDataURL }: ISermonsYouthPageProps) => {
  const { data, isRefetching } = useGetYoutubeLink("youth");

  if (isRefetching) return <Spinner />;

  return (
    <Layout
      pageTitle="청년 예배"
      title="청년 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermon/banner3.JPG"
      bannerImgClass="object-[50%_60%] xl:object-[50%_50%]"
      innerMenus={sermonsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <div className="flex items-center justify-center">
        {data && <SermonContainer title="청년 예배" list={data.videos} />}
      </div>
    </Layout>
  );
};

export default SermonsYouthPage;
