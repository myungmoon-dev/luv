import React from "react";

import Layout from "@/components/layout";

const SermonsWednesdayPage = () => {
  return (
    <Layout
      title="수요 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={[
        { label: "주일 3부 예배", path: "/sermons/sunday-3" },
        { label: "젊은이 예배", path: "/sermons/youth" },
        { label: "주일찬양예배", path: "/sermons/sunday-praise" },
        { label: "수요 예배", path: "/sermons/wednesday" },
        { label: "금요기도회", path: "/sermons/friday" },
      ]}
    >
      <div>SermonsWednesdayPage</div>
    </Layout>
  );
};

export default SermonsWednesdayPage;
