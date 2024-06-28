import HistoryEventList from "@/components/about/historyEventList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutHistoryMenus, aboutInnerMenus } from "@/constants/innerMenus/about";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/about/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IHistoryPageProps {
  bannerBlurDataURL: string;
}

const HistoryPage = ({ bannerBlurDataURL }: IHistoryPageProps) => {
  return (
    <Layout
      pageTitle="연혁"
      title="연혁"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutHistoryMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Tabs menus={aboutHistoryMenus}>
        <HistoryEventList decade="2020년대" />
      </Tabs>
    </Layout>
  );
};

export default HistoryPage;
