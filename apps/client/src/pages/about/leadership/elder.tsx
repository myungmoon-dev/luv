import Layout from "@/components/layout";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import Tabs from "@/components/layout/tabs";
import ProfileList from "@/components/about/leadership/profileList";

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

interface ILeadershipElderPageProps {
  bannerBlurDataURL: string;
}

const LeadershipElderPage = ({ bannerBlurDataURL }: ILeadershipElderPageProps) => {
  return (
    <Layout
      pageTitle="섬기는 분들-장로"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Tabs menus={aboutLeaderMenus}>
        <ProfileList tabType="elder" className="md:grid-cols-2 xl:grid-cols-3" />
      </Tabs>
    </Layout>
  );
};

export default LeadershipElderPage;
