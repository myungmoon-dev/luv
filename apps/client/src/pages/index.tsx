import HomePage from "@/components/home";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout pageTitle="메인" bannerVideo="/videos/banner.mp4">
      <HomePage />
    </Layout>
  );
}
