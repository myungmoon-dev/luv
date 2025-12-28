import { useGetBible } from "@/query/bible";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { SafeHTML, Spinner, YoutubeVideo } from "ui";

const DiscipleshipFaithReadingBibleDetail = () => {
  const params = useParams();
  const { push } = useRouter();
  const bibleId = params?.id as string;
  const { data, isFetching } = useGetBible({ bibleId });

  if (isFetching)
    return (
      <div className="flex justify-center py-10">
        <Spinner />
      </div>
    );

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
      {/* 뒤로 버튼 */}
      <button
        onClick={() => push("/discipleship/faith/bibleReading")}
        className="mb-6 flex items-center gap-2 text-gray-700 transition-colors hover:text-gray-900"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">뒤로</span>
      </button>

      {/* 날짜 */}
      <p className="mb-2 text-sm text-gray-500">{dayjs(data?.date).format("YYYY.MM.DD")}</p>

      {/* 타이틀 */}
      <h1 className="mb-6 text-xl font-bold text-[#001F54] sm:text-2xl">{data?.title}</h1>

      {/* 내용 */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <SafeHTML html={data?.content} />
      </div>

      {/* 유튜브 비디오 */}
      {data?.links && data.links.length > 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {data.links.map((link) => (
            <YoutubeVideo
              className="h-[250px]"
              videoId={link.name}
              isPlaylist={link.isPlaylist}
              key={link.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscipleshipFaithReadingBibleDetail;
