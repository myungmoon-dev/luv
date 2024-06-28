import DiscipleshipPanorama from "@/components/discipleship/main/panorama";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/bibleBanner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IDiscipleshipMainPanoramaPageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipMainPanoramaPage = ({ bannerBlurDataURL }: IDiscipleshipMainPanoramaPageProps) => {
  return (
    <Layout
      pageTitle="성경 파노라마"
      title="성경 파노라마"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/bibleBanner.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipPanorama />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainPanoramaPage;
