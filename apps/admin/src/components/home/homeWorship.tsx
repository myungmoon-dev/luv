import { useRouter } from "next/navigation";
import HomeSection from "./section";

const HomeWorshipSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="가정예배">
      <button
        onClick={() => push("/homeworship/create")}
        className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white"
      >
        추가
      </button>
    </HomeSection>
  );
};

export default HomeWorshipSection;
