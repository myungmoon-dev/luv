import DiscipleshipMainBibleDetail from "@/components/discipleship/main/bible/detail";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { discipleshipInnerMenus, discipleshipMainMenus } from "@/constants/innerMenus/discipleship";

export async function getStaticPaths() {
  return { paths: [], fallback: true }; // TODO: 성경통복 id 가져와 적용
}

const DiscipleshipMainBibleDetailPage = () => {
  return (
    <Layout
      pageTitle="성경통독"
      title="성경통독"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/bibleBanner.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      detailMenus={discipleshipMainMenus}
    >
      <Tabs menus={discipleshipMainMenus}>
        <DiscipleshipMainBibleDetail />
      </Tabs>
    </Layout>
  );
};

export default DiscipleshipMainBibleDetailPage;
