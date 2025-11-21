import AboutBack from "@/components/about/Back";
import LgNavigation from "@/components/about/LgNavigation";
import AboutMinistryVision from "@/components/about/vision/ministryVision";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const AboutVisionPage = () => {
  return (
    <Layout
      pageTitle="목회비전"
      title="목회비전"
      innerMenus={aboutInnerMenus}
      customBanner={<></>}
      hasChildrenPadding={false}
    >
      <AboutBack title="교회비전" />
      <LgNavigation />
      <AboutMinistryVision />
    </Layout>
  );
};

export default AboutVisionPage;
