import HomeWorshipDetail from "@/components/homeWorship/detail";
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

interface IDiscipleshipMainBibleDetailPageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipMainBibleDetailPage = ({ bannerBlurDataURL }: IDiscipleshipMainBibleDetailPageProps) => {
  return (
    <Layout
      pageTitle="맛있는 가정예배"
      title="맛있는 가정예배"
      bannerImage="/images/home/homeworship.png"
      bannerImgClass="object-[100%_30%] brightness-75 md:object-[100%_15%] 2xl:object-[100%_25%]"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <HomeWorshipDetail />
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
