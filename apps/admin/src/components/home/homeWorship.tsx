import { useRouter } from "next/navigation";
import HomeSection from "./section";

const HomeWorshipSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="가정예배 공지">
      <button
        onClick={() => push("/homeWorship/create")}
        className="flex justify-center items-center bg-blue-500 text-white rounded-md w-12 h-12"
      >
        추가
      </button>
    </HomeSection>
  );
};

export default HomeWorshipSection;
