import HistoryEventList from "@/components/about/historyEventList";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutHistoryMenus, aboutInnerMenus } from "@/constants/innerMenus/about";

const History1990sPage = () => {
  return (
    <Layout
      pageTitle="연혁"
      title="연혁"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutHistoryMenus}
    >
      <Tabs menus={aboutHistoryMenus}>
        <HistoryEventList decade="1990년대" />
      </Tabs>
    </Layout>
  );
};

export default History1990sPage;
