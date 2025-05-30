import ServicesTable from "@/components/about/servicesTable";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import { SectionHeader } from "ui";

const AboutServicesPage = () => {
  return (
    <Layout
      pageTitle="예배 안내"
      title="예배 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
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
