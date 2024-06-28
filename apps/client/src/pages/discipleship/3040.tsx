import React from "react";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import Discipleship3040 from "@/components/discipleship/3040";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/3040/banner.png");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IDiscipleship3040PageProps {
  bannerBlurDataURL: string;
}

const Discipleship3040Page = ({ bannerBlurDataURL }: IDiscipleship3040PageProps) => {
  return (
    <Layout
      pageTitle="3040세대"
      title="3040세대"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/3040/banner.png"
      bannerImgClass="object-[40%-20%] xl:object-[100%_30%]"
      innerMenus={discipleshipInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <Discipleship3040 />
    </Layout>
  );
};

export default Discipleship3040Page;
