import React from "react";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import DiscipleshipNew from "@/components/discipleship/new";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/discipleship/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IDiscipleshipNewPageProps {
  bannerBlurDataURL: string;
}

const DiscipleshipNewPage = ({ bannerBlurDataURL }: IDiscipleshipNewPageProps) => {
  return (
    <Layout
      pageTitle="새가족 교육"
      title="새가족 교육"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/discipleship/banner3.jpg"
      bannerImgClass="object-[100%_40%]"
      innerMenus={discipleshipInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <DiscipleshipNew />
    </Layout>
  );
};

export default DiscipleshipNewPage;
