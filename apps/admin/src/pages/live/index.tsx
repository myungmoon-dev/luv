import YoutubeSection from "@/components/home/youtube";
import Layout from "@/components/layout";
import React from "react";

const LivePage = () => {
  return (
    <Layout title="실시간 생방송 링크">
      <YoutubeSection />
    </Layout>
  );
};

export default LivePage;
