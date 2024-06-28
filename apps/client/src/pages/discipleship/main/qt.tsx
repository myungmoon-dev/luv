import DiscipleshipQt from "@/components/discipleship/main/qt";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/qt/banner.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IDiscipleshipMainQtPageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipMainQtPage = ({ bannerBlurDataURL }: IDiscipleshipMainQtPageProps) => {
  return (
    <Layout
      pageTitle="큐티 세미나"
      title="큐티 세미나"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/qt/banner.jpg"
      bannerImgClass="object-[50%_50%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipQt />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainQtPage;
