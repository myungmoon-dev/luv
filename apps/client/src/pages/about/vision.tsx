import AboutMinistryVision from "@/components/about/vision/ministryVision";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const AboutVisionPage = () => {
  return (
    <Layout
      pageTitle="목회비전"
      title="목회비전"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <AboutMinistryVision />
    </Layout>
  );
};

export default AboutVisionPage;
