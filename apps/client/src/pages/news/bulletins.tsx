import Layout from "@/components/layout";
import Bulletins from "@/components/news/bulletins";

const BulletinsPage = () => {
  return (
    <Layout pageTitle="주보" title="주보" customBanner={<></>} hasChildrenPadding={false}>
      <Bulletins />
    </Layout>
  );
};

export default BulletinsPage;
