import { useForm } from "react-hook-form";

interface IUrlForm {
  url: string;
}

const MOCK_URL = "https://bit.ly/3SWQldZ";

export default function Home() {
  const { handleSubmit, register } = useForm<IUrlForm>();

  const onSubmit = (data: IUrlForm) => {
    if (!confirm(`변경하시려는 주소가 ${data.url}이 맞습니까??`)) return;

    // TODO: URL 변경 API 찌르기
  };

  return (
    <main>
      <div className="flex">
        <h1>현재 주소</h1>
        <a href={MOCK_URL}>{MOCK_URL}</a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("url")} />
        <button>수정하기</button>
      </form>
    </main>
  );
}
