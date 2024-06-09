import { useRouter } from "next/navigation";

const HomeBannerBible = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center font-SCoreDream text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">온세대가 함께하는</span>
        <br />
        <span data-aos="fade-up">{"<181일 성경통독>"}</span>
      </h1>
      <button
        onClick={() => push("/discipleship/main/bible")}
        data-aos="fade-up"
        className="text-xl font-bold text-white hover:underline"
      >
        성경통독 게시판 바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerBible;
