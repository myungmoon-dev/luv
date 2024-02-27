import React from "react";

import Layout from "@/components/layout";

const EducationPrimaryPage = () => {
  return (
    <Layout
      title="유년부"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/balance.jpg"
      innerMenus={[
        { label: "영아부", path: "/education/infants" },
        { label: "유치부", path: "/education/toddlers" },
        { label: "유년부", path: "/education/primary" },
        { label: "초등부", path: "/education/elementary" },
        { label: "중등부", path: "/education/middle" },
        { label: "고등부", path: "/education/high" },
        { label: "2청년", path: "/education/young-adults2" },
        { label: "1청년", path: "/education/young-adults1" },
      ]}
    >
      <div>EducationPrimaryPage</div>
    </Layout>
  );
};

export default EducationPrimaryPage;
