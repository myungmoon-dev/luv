import { useGetAlbumList } from "@/query/album";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { AlbumType } from "type";
import { Spinner } from "ui";

export const ALBUM_OPTION_DATA = [
  {
    label: "명문앨범",
    value: "main",
  },
  {
    label: "유년부",
    value: "infants",
  },
  {
    label: "유치부",
    value: "toddlers",
  },
  {
    label: "예빛(유초등부)",
    value: "elementary",
  },
  {
    label: "중등부",
    value: "middle",
  },
  {
    label: "고등부",
    value: "high",
  },
  {
    label: "2청년부",
    value: "2youth",
  },
  {
    label: "1청년부",
    value: "1youth",
  },
  {
    label: "큐티세미나",
    value: "qt",
  },
  {
    label: "성경파노라마",
    value: "panorama",
  },
  {
    label: "새신자",
    value: "newFamilly",
  },

  {
    label: "신혼가정",
    value: "newlyweds",
  },
  {
    label: "3040세대",
    value: "3040",
  },
];

const HomeAlbumList = () => {
  const { asPath, push, back } = useRouter();
  const [selectedType, setSelectedType] = useState<AlbumType>("all");
  const { data } = useGetAlbumList(selectedType);

  const onTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as AlbumType;
    setSelectedType(selected);
  };

  return (
    <div className="w-full flex gap-10 flex-col p-20 px-5 bg-gray-800">
      <button
        onClick={() => back()}
        className="font-bold rounded-md text-black bg-white w-fit p-2"
      >
        뒤로가기
      </button>
      <h1 className="text-3xl font-semibold">앨범 업로드</h1>
      <header className="flex gap-3 justify-between">
        <p>{`데이터 수 : ${data ? data.length : ""}`}</p>
        <div className="flex gap-3 items-end">
          {/* 검색정렬 1 (타입) */}
          <select
            className="flex rounded px-3 py-2 font-bold text-black flex-grow appearance-no text-center"
            onChange={onTypeChange}
            value={selectedType}
          >
            <option value="all">전체</option>
            {ALBUM_OPTION_DATA.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* 2. 검색정렬 차순 */}
          <select
            className="flex rounded px-3 py-2 text-black flex-grow font-semibold appearance-no text-center"
            onChange={() => {}}
            value="desc"
          >
            <option value="desc">내림차순</option>
            <option value="asc">오름차순</option>
          </select>
          {/* FIXME: 검색정렬 (검색어) */}
          {/* 검색 버튼 */}
          <button
            onClick={() => {}}
            className="p-2 px-3 rounded-md bg-blue-600 font-bold"
          >
            검색
          </button>
        </div>
      </header>
      {/* title */}
      <div className="grid grid-cols-5 gap-2 place-items-center font-bold text-lg">
        <p>번호</p>
        <p>제목</p>
        <p>타입</p>
        <p>업로드날짜</p>
        <p>처리</p>
      </div>
      {/* content */}
      <div className="flex flex-col w-full gap-5">
        {!data ? (
          <div className="w-full flex flex-col justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <>
            {data.length === 0 && (
              <p className="text-center">데이터가 존재하지 않습니다.</p>
            )}
            {data.map((album) => {
              // ALBUM_OPTION_DATA에서 albumType에 해당하는 label 찾기
              const albumOption = ALBUM_OPTION_DATA.find(
                (option) => option.value === album.albumType
              );

              return (
                <div
                  key={album.id}
                  className="grid grid-cols-5 gap-2 place-items-center"
                >
                  <p>{album.idx}</p>
                  <p>{album.title}</p>
                  <p className="flex gap-1">{albumOption?.label ?? ""}</p>
                  <p>{album.createdAt}</p>
                  <p className="flex gap-3">
                    <button
                      onClick={() => {}}
                      className="p-2 px-3 rounded-md bg-blue-600 font-bold"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => {}}
                      className="p-2 px-3 rounded-md bg-red-500 font-bold"
                    >
                      삭제
                    </button>
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
      {/* footer */}
      <footer className="w-full flex">
        <button
          onClick={() => {
            push(`${asPath}/create`);
          }}
          className="p-2 px-3 rounded-md bg-blue-600 font-bold"
        >
          앨범 추가
        </button>
      </footer>
    </div>
  );
};

export default HomeAlbumList;
