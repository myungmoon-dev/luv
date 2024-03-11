import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IUrlForm {
  url: string;
}
interface IFetcher {
  url: string;
  data?: any;
  method: string;
}

const fetcher = ({ method, url, data }: IFetcher) =>
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export default function Home() {
  const { handleSubmit, register } = useForm<IUrlForm>();
  const [livelink, setLivelink] = useState("");

  const fetchLivelink = async () => {
    try {
      const result = await fetcher({ url: "/api/youtube", method: "GET" });
      setLivelink(result.livelink);
    } catch (error) {
      // FIXME: Handle errors here
    }
  };

  useEffect(() => {
    fetchLivelink();
  }, []);

  const onSubmit = async ({ url }: IUrlForm) => {
    if (!confirm(`변경주소: ${url}`)) return;
    try {
      // API로 데이터 전송
      await fetcher({
        url: "/api/youtube",
        method: "POST",
        data: {
          url,
        },
      });
      // 응답 처리
      alert("변경 되었습니다.");
    } catch (error) {
      console.error("API 요청 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <h1>현재 주소:&nbsp;</h1>
          <a
            href={`https://www.youtube.com/embed/${livelink}`}
            className="text-blue-500"
          >
            {livelink}
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <input
            {...register("url")}
            className="border rounded px-4 py-2 text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            수정하기
          </button>
        </form>
      </div>
    </main>
  );
}
