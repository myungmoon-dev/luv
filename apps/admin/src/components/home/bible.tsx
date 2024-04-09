import { useRouter } from "next/navigation";
import HomeSection from "./section";

const BibleSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="성경통독">
      <button
        onClick={() => push("/discipleship/bibles/create")}
        className="flex justify-center items-center bg-blue-500 text-white rounded-md w-12 h-12"
      >
        추가
      </button>
    </HomeSection>
  );
};

export default BibleSection;
