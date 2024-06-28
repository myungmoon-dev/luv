import Layout from "@/components/layout";
import MissionDetail from "@/components/news/mission/detail";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // TODO: 선교지 소식 id 가져와 적용
}

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/banner5.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IMissionNewsDetailPageProps {
  bannerBlurDataURL: string;
}

const MissionNewsDetailPage = ({ bannerBlurDataURL }: IMissionNewsDetailPageProps) => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner5.jpg"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <MissionDetail />
    </Layout>
  );
};

export default MissionNewsDetailPage;
