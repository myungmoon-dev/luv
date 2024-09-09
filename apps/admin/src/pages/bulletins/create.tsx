import BulletinCreate from "@/components/bulletins/create";
import Layout from "@/components/layout";
import React from "react";

const BulletinsCreatePage = () => {
  return (
    <Layout title="주보 추가">
      <BulletinCreate />
    </Layout>
  );
};

export default BulletinsCreatePage;
