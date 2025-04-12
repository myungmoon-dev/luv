import HomePage from "@/components/home";
import HomeBanner from "@/components/home/banner";
import PopupProvider from "@/components/home/popupProvider";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout
      customBanner={<HomeBanner />}
      pageTitle="메인"
      bannerImage="/images/home/section1.png"
      hasChildrenPadding={false}
      imageClassName="sm:!h-[600px]"
    >
      <PopupProvider>
        <HomePage />
      </PopupProvider>
    </Layout>
  );
}
