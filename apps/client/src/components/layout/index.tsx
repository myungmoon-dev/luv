import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import { Banner, Footer } from "ui";

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
    <div>
      <Banner
        image={bannerImage}
        video={bannerVideo}
        title={title}
        description={bannerDescription}
        innerMenus={innerMenus}
        pathname={asPath}
        onClickChip={push}
      />
      <div className="px-24 py-32 lg:px-48">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
