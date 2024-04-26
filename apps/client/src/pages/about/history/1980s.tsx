import HistoryEventList from "@/components/about/historyEventList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutHistoryMenus, aboutInnerMenus } from "@/constants/innerMenus/about";

const History1980sPage = () => {
  return (
    <Layout
      pageTitle="연혁"
      title="연혁"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutHistoryMenus}
    >
      <Tabs menus={aboutHistoryMenus}>
        <HistoryEventList decade="1980년대" />
      </Tabs>
    </Layout>
  );
};

export default History1980sPage;
