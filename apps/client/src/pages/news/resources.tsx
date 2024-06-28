import Layout from "@/components/layout";
import Resources from "@/components/news/resources";
import { newsInnerMenus } from "@/constants/innerMenus/news";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IResourcesPageProps {
  bannerBlurDataURL: string;
}

const ResourcesPage = ({ bannerBlurDataURL }: IResourcesPageProps) => {
  return (
    <Layout
      pageTitle="자료함"
      title="자료함"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/news/banner3.jpg"
      innerMenus={newsInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Resources />
    </Layout>
  );
};

export default ResourcesPage;
