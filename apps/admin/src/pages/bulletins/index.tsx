import BulletinSection from "@/components/home/bulletin";
import Layout from "@/components/layout";
import { useGetBulletins } from "@/query/bulletin";
import { useRouter } from "next/navigation";
import { Spinner, Table } from "ui";

const BulletinsPage = () => {
  const { push } = useRouter();

  const { data } = useGetBulletins();

  return (
    <Layout title="주보">
      <BulletinSection />
      <div className="px-24 py-10">
        {!data ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <Table
            data={data?.bulletins.map((bulletin) => ({
              id: bulletin.id,
              date: bulletin.date,
              title: bulletin.title,
              writer: "관리자",
            }))}
            onClickRow={(rowId) => push(`/bulletins/${rowId}`)}
          />
        )}
      </div>
    </Layout>
  );
};

export default BulletinsPage;
