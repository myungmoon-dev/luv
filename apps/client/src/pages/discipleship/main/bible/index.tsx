import DiscipleshipMainBible from "@/components/discipleship/main/bible";
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

interface IDiscipleshipMainBiblePageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipMainBiblePage = ({ bannerBlurDataURL }: IDiscipleshipMainBiblePageProps) => {
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
        <DiscipleshipMainBible />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainBiblePage;
