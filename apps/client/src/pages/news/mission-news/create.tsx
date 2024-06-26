import Layout from "@/components/layout";
import MissionCreate from "@/components/news/mission/create";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/banner5.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IMissionNewsCreatePageProps {
  bannerBlurDataURL: string;
}

const MissionNewsCreatePage = ({ bannerBlurDataURL }: IMissionNewsCreatePageProps) => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner5.jpg"
      bannerBlurDataURL={bannerBlurDataURL}
      // innerMenus={newsInnerMenus}
    >
      <MissionCreate />
    </Layout>
  );
};

export default MissionNewsCreatePage;
