import React, { ReactNode } from "react";

import { Banner, Footer } from "ui";

interface LayoutProps {
  children: ReactNode;
  bannerImage: string;
  title: string;
  bannerDescription: string;
  innerMenus?: { label: string; path: string }[];
}

const Layout = ({ children, bannerDescription, bannerImage, title, innerMenus }: LayoutProps) => {
  return (
    <div>
      <Banner image={bannerImage} title={title} description={bannerDescription} innerMenus={innerMenus} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
