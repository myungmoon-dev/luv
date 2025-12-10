import { IResource } from "@/types/news/common";

interface IResourceBottomSheetProps {
  resource: IResource;
}

const ResourceBottomSheet = ({ resource }: IResourceBottomSheetProps) => {
  const handleDownload = (downloadUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col">
      {/* 제목 */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-center text-lg font-bold text-[#222222] sm:text-xl md:text-2xl">
          {resource.title}
        </h2>
      </div>

      {/* 구분선 */}
      <div className="h-px bg-[#ECECEC]" />

      {/* 파일 목록 */}
      {resource.fileList && resource.fileList.length > 0 ? (
        <div className="flex flex-col">
          {resource.fileList.map((file, index) => (
            <div key={index}>
              <button
                onClick={() => handleDownload(file.download, file.name)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[#F9F9F9]"
              >
                <span className="text-sm text-[#666666] sm:text-base md:text-lg">
                  다운로드
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-4 h-6 w-6 flex-shrink-0 text-[#666666]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
              {index < resource.fileList.length - 1 && (
                <div className="h-px bg-[#ECECEC]" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center px-6 py-8">
          <p className="text-sm text-[#666666]">다운로드할 파일이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default ResourceBottomSheet;

