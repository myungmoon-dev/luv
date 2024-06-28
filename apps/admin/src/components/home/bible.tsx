import { useRouter } from "next/navigation";
import HomeSection from "./section";

const BibleSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="성경통독">
      <div className="flex gap-5">
        <button
          onClick={() => push("/discipleship/bibles")}
          className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white"
        >
          목록
        </button>
        <button
          onClick={() => push("/discipleship/bibles/create")}
          className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white"
        >
          추가
        </button>
      </div>
    </HomeSection>
  );
};

export default BibleSection;
