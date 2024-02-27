import React from "react";

import Layout from "@/components/layout";

const FellowshipBulletinsPage = () => {
  return (
    <Layout
      title="주보"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={[
        { label: "명문소식", path: "/fellowship/news" },
        { label: "교우소식", path: "/fellowship/member-news" },
        { label: "명문영상", path: "/fellowship/videos" },
        { label: "주보", path: "/fellowship/bulletins" },
        { label: "교회 앨범", path: "/fellowship/photos" },
        { label: "새가족 앨범", path: "/fellowship/new-photos" },
        { label: "선교지 소식", path: "/fellowship/mission-news" },
        { label: "남전도회", path: "/fellowship/mens" },
        { label: "당회소식", path: "/fellowship/session-news" },
        { label: "자료함", path: "/fellowship/resources" },
      ]}
    >
      <div>FellowshipBulletinsPage</div>
    </Layout>
  );
};

export default FellowshipBulletinsPage;
