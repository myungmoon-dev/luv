import HomeWorshipCreate from "@/components/homeWorship/create";
import Layout from "@/components/layout";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IHomeWorshipCreatePageProps {
  bannerBlurDataURL: string;
}

const HomeWorshipCreatePage = ({ bannerBlurDataURL }: IHomeWorshipCreatePageProps) => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/education/banner.jpg"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <HomeWorshipCreate />
    </Layout>
  );
};

export default HomeWorshipCreatePage;
