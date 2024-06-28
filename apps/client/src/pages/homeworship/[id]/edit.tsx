import HomeWorshipEdit from "@/components/homeWorship/edit";
import Layout from "@/components/layout";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // TODO: 가정예배 id 가져와 적용
}

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/education/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IHomeWorshipEditPageProps {
  bannerBlurDataURL: string;
}

const HomeWorshipEditPage = ({ bannerBlurDataURL }: IHomeWorshipEditPageProps) => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/education/banner.jpg"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <HomeWorshipEdit />
    </Layout>
  );
};

export default HomeWorshipEditPage;
