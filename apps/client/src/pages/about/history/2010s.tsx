import HistoryEventList from "@/components/about/history/historyEventList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutHistoryMenus, aboutInnerMenus } from "@/constants/innerMenus/about";

const History2010sPage = () => {
  return (
    <Layout
      pageTitle="연혁"
      title="연혁"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutHistoryMenus}
    >
      <Tabs menus={aboutHistoryMenus}>
        <HistoryEventList decade="2010년대" />
      </Tabs>
    </Layout>
  );
};

export default History2010sPage;
