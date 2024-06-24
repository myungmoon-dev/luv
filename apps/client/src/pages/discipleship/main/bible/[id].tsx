import DiscipleshipMainBibleDetail from "@/components/discipleship/main/bible/detail";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // TODO: 성경통복 id 가져와 적용
}

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/bibleBanner.jpg");

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
      pageTitle="성경통독"
      title="성경통독"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/bibleBanner.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipMainBibleDetail />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
