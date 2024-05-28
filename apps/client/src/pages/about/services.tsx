import React from "react";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import { SectionHeader } from "ui";
import ServicesTable from "@/components/about/servicesTable";

const AboutServicesPage = () => {
  return (
    <Layout
      pageTitle="예배 안내"
      title="예배 안내"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner2.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-20 px-5">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <SectionHeader text="주일예배" hasLine={true} selected={true} size="sm" />
          <ServicesTable worship="주일" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <SectionHeader text="평일예배" hasLine={true} selected={true} size="sm" />
          <ServicesTable worship="평일" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <SectionHeader text="다음세대예배" hasLine={true} selected={true} size="sm" />
          <ServicesTable worship="다음세대" />
        </div>
      </div>
    </Layout>
  );
};

export default AboutServicesPage;
