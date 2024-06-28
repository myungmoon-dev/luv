import Layout from "@/components/layout";
import Mission from "@/components/news/mission";
import { newsInnerMenus } from "@/constants/innerMenus/news";

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

interface IMissionNewsPageProps {
  bannerBlurDataURL: string;
}

const MissionNewsPage = ({ bannerBlurDataURL }: IMissionNewsPageProps) => {
  return (
    <Layout
      pageTitle="선교지 소식"
      title="선교지 소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner5.jpg"
      innerMenus={newsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Mission />
    </Layout>
  );
};

export default MissionNewsPage;
