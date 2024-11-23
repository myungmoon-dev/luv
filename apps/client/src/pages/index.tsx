import HomePage from "@/components/home";
import HomeBanner, { HomeBannerEnum } from "@/components/home/banner";
import Layout from "@/components/layout";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";
import { useEffect } from "react";

export async function getStaticProps() {
  const watchwordPath = path.resolve("public/images/home/banner1.png");
  const livePath = path.resolve("public/images/home/banner3.jpeg");
  const biblePath = path.resolve("public/images/home/banner2.jpeg");
  const homeWorshipPath = path.resolve("public/images/home/homeworship.png");

  const watchwordBlurDataURL = await generateBlurDataURL(watchwordPath);
  const liveBlurDataURL = await generateBlurDataURL(livePath);
  const bibleBlurDataURL = await generateBlurDataURL(biblePath);
  const homeWorshipBlurDataURL = await generateBlurDataURL(homeWorshipPath);

  return {
    props: {
      bannerBlurDataURLs: {
        [HomeBannerEnum.Watchword]: watchwordBlurDataURL,
        [HomeBannerEnum.Live]: liveBlurDataURL,
        [HomeBannerEnum.Bible]: bibleBlurDataURL,
        [HomeBannerEnum.HomeWorship]: homeWorshipBlurDataURL,
      },
    },
  };
}

interface IHomePageProps {
  bannerBlurDataURLs: Record<HomeBannerEnum, string>;
}

export default function Home({ bannerBlurDataURLs }: IHomePageProps) {
  return (
    <Layout
      customBanner={<HomeBanner blurDataURLs={bannerBlurDataURLs} />}
      pageTitle="메인"
      bannerImage="/images/home/section1.png"
      hasChildrenPadding={false}
      imageClassName="sm:!h-[600px]"
    >
      <HomePage />
    </Layout>
  );
}
