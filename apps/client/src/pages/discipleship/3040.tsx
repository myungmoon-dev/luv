import Discipleship3040 from "@/components/discipleship/3040";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";

const Discipleship3040Page = () => {
  return (
    <Layout
      pageTitle="3040세대"
      title="3040세대"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/3040/banner.png"
      bannerImgClass="object-[40%-20%] xl:object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
    >
      <Discipleship3040 />
    </Layout>
  );
};

export default Discipleship3040Page;
