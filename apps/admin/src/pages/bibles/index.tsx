import Bibles from "@/components/bibles";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DiscipleShipBiblesPage = () => {
  const { push } = useRouter();

  return (
    <Layout
      title="성경통독"
      titleChildren={<Button onClick={() => push("/bibles/create")}>추가</Button>}
    >
      <Bibles />
    </Layout>
  );
};

export default DiscipleShipBiblesPage;
