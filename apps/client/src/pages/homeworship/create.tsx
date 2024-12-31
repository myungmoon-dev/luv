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
      pageTitle="가정예배 인증하기"
      title="가정예배 인증하기"
      bannerImage="/images/home/homeworship.png"
      bannerImgClass="object-[100%_30%] brightness-75 md:object-[100%_15%] 2xl:object-[100%_25%]"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <HomeWorshipCreate />
    </Layout>
  );
};

export default HomeWorshipCreatePage;
