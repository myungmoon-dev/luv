import HistoryEventList from "@/components/about/history/historyEventList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutHistoryMenus, aboutInnerMenus } from "@/constants/innerMenus/about";

const HistoryPage = () => {
  return (
    <Layout
      pageTitle="연혁"
      title="연혁"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutHistoryMenus}
    >
      <Tabs menus={aboutHistoryMenus}>
        <HistoryEventList decade="2020년대" />
      </Tabs>
    </Layout>
  );
};

export default HistoryPage;
