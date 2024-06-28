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

interface IHistory1990sPageProps {
  bannerBlurDataURL: string;
}

const History1990sPage = ({ bannerBlurDataURL }: IHistory1990sPageProps) => {
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
        <HistoryEventList decade="1990년대" />
      </Tabs>
    </Layout>
  );
};

export default History1990sPage;
