import DiscipleshipNewlyweds from "@/components/discipleship/newlyweds";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const DiscipleshipNewlywedsPage = () => {
  return (
    <Layout
      pageTitle="신혼가정"
      title="신혼가정"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/newlyweds/banner.png"
      bannerImgClass="object-[50%_20%]"
      innerMenus={discipleshipInnerMenus}
    >
      <DiscipleshipNewlyweds />
    </Layout>
  );
};

export default DiscipleshipNewlywedsPage;
