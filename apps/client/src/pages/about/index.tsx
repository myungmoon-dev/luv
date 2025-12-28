import About from "@/components/about";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const AboutPage = () => {
  return (
    <Layout
      pageTitle="교회소개"
      title="교회소개"
      innerMenus={aboutInnerMenus}
      customBanner={<></>}
      hasChildrenPadding={false}
    >
      <About />
    </Layout>
  );
};

export default AboutPage;
