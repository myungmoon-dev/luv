import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import { Banner, Footer, Header } from "ui";

interface LayoutProps {
  children: ReactNode;
  bannerImage?: string;
  bannerVideo?: string;
  title?: string;
  bannerDescription?: string;
  innerMenus?: { label: string; path: string }[];
}

const Layout = ({ children, bannerDescription, bannerImage, title, innerMenus, bannerVideo }: LayoutProps) => {
  const { asPath, push } = useRouter();

  return (
    <main className="relative">
      <Header push={push} />
      <Banner
        image={bannerImage}
        video={bannerVideo}
        title={title}
        description={bannerDescription}
        innerMenus={innerMenus}
        pathname={asPath}
        onClickChip={push}
        push={push}
      />
      <div className="px-4 py-20 sm:px-24 sm:py-32 lg:px-48">{children}</div>
      <Footer push={push} />
    </main>
  );
};

export default Layout;
