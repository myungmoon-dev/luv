import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { Banner, Footer, Header } from "ui";
import { BannerImageComponent } from "./bannerImage";
import BannerIconList from "./bannerIconList";
import { IBannerIcon } from "@/types/banner/type";
import AOS from "aos";

import "aos/dist/aos.css";

interface LayoutProps {
  children: ReactNode;
  bannerImage?: string;
  bannerVideo?: string;
  bannerIcons?: IBannerIcon[];
  title?: string;
  bannerDescription?: string;
  innerMenus?: { label: string; path: string }[];
  detailMenus?: { label: string; path: string }[];
  pageTitle: string;
}

const Layout = ({
  children,
  bannerDescription,
  bannerImage,
  bannerIcons,
  title,
  pageTitle,
  innerMenus,
  detailMenus,
  bannerVideo,
}: LayoutProps) => {
  const { asPath, push } = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Head>
        <title>{`${pageTitle} | 명문교회`}</title>
        <meta name="title" content={`${pageTitle} | 명문교회`} />
        <meta name="keywords" content="명문교회, 대한예수교장로회 합동, 김지혁 목사, 이덕진 목사" />
        <meta name="description" content="복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!" />
        <meta property="og:title" content={`${pageTitle} | 명문교회`} />
        <meta property="og:url" content="https://myungmoon.or.kr/" />
        <meta property="og:description" content="복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!" />
        <meta property="og:image" content="https://myungmoon.or.kr/images/Logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="relative">
        <Header push={push} />
        <Banner
          iconList={bannerIcons && <BannerIconList list={bannerIcons} />}
          image={bannerImage && <BannerImageComponent image={bannerImage} />}
          video={bannerVideo}
          title={title}
          description={bannerDescription}
          innerMenus={innerMenus}
          detailMenus={detailMenus}
          pathname={asPath}
          onClickChip={push}
          push={push}
        />
        <div className="py-20 sm:py-24">{children}</div>
        <Footer push={push} />
      </main>
    </>
  );
};

export default Layout;
