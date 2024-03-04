import HomePage from "@/components/home";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout bannerVideo="/videos/banner.mp4">
      <HomePage />
    </Layout>
  );
}
