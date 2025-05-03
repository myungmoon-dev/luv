import DiscipleshipNew from "@/components/discipleship/new";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipNewPage = () => {
  return (
    <Layout
      pageTitle="새가족 교육"
      title="새가족 교육"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner3.jpg"
      bannerImgClass="object-[100%_40%]"
      innerMenus={discipleshipInnerMenus}
    >
      <DiscipleshipNew />
    </Layout>
  );
};

export default DiscipleshipNewPage;
