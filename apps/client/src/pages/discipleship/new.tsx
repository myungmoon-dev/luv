import DiscipleshipNew from "@/components/discipleship/new";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipNewPage = () => {
  return (
    <Layout
      pageTitle="새가족 교육"
      title="새가족 교육"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/banner3.jpg"
      bannerImgClass="object-[100%_40%]"
      innerMenus={discipleshipInnerMenus}
    >
      <DiscipleshipNew />
    </Layout>
  );
};

export default DiscipleshipNewPage;
