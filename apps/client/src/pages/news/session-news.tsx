import Layout from "@/components/layout";
import Session from "@/components/news/session";
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

interface ISessionNewsPageProps {
  bannerBlurDataURL: string;
}

const SessionNewsPage = ({ bannerBlurDataURL }: ISessionNewsPageProps) => {
  return (
    <Layout
      pageTitle="당회소식"
      title="당회소식"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner5.jpg"
      innerMenus={newsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Session />
    </Layout>
  );
};

export default SessionNewsPage;
