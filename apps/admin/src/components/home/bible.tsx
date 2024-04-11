import { useRouter } from "next/navigation";
import HomeSection from "./section";

const BibleSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="성경통독">
      <div className="flex gap-5">
        <button
          onClick={() => push("/discipleship/bibles")}
          className="flex justify-center items-center bg-blue-500 text-white rounded-md w-12 h-12"
        >
          목록
        </button>
        <button
          onClick={() => push("/discipleship/bibles/create")}
          className="flex justify-center items-center bg-blue-500 text-white rounded-md w-12 h-12"
        >
          추가
        </button>
      </div>
    </HomeSection>
  );
};

export default BibleSection;
