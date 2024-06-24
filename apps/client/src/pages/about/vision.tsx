import AboutMinistryVision from "@/components/about/ministryVision";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/about/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IAboutVisionPageProps {
  bannerBlurDataURL: string;
}

const AboutVisionPage = ({ bannerBlurDataURL }: IAboutVisionPageProps) => {
  return (
    <Layout
      pageTitle="목회비전"
      title="목회비전"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <AboutMinistryVision />
    </Layout>
  );
};

export default AboutVisionPage;
