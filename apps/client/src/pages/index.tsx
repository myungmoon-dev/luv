import HomePage from "@/components/home";
import HomeBanner from "@/components/home/banner";
import Layout from "@/components/layout";
import BibleConferenceModal from "@/components/modal/bibleConference";
import useModalStore from "@/store/modal";
import { useEffect } from "react";

export default function Home() {
  const open = useModalStore((state) => state.open);

  useEffect(() => {
    open(<BibleConferenceModal />);
  }, []);

  return (
    <Layout
      customBanner={<HomeBanner />}
      pageTitle="메인"
      bannerImage="/images/home/section1.png"
      hasChildrenPadding={false}
      imageClassName="sm:!h-[600px]"
    >
      <HomePage />
    </Layout>
  );
}
