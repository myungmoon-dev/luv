import React from "react";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import DiscipleshipNewlyweds from "@/components/discipleship/newlyweds";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/newlyweds/banner.png");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IDiscipleshipNewlywedsPageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipNewlywedsPage = ({ bannerBlurDataURL }: IDiscipleshipNewlywedsPageProps) => {
  return (
    <Layout
      pageTitle="신혼가정"
      title="신혼가정"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/newlyweds/banner.png"
      bannerImgClass="object-[50%_20%]"
      innerMenus={discipleshipInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <DiscipleshipNewlyweds />
    </Layout>
  );
};

export default DiscipleshipNewlywedsPage;
