import Layout from "@/components/layout";
import NotPrepared from "@/components/layout/notPrepared";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IDiscipleshipPageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipPage = ({ bannerBlurDataURL }: IDiscipleshipPageProps) => {
  return (
    <Layout
      pageTitle="전체 안내"
      title="전체 안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <NotPrepared />
    </Layout>
  );
};

export default DiscipleshipPage;
