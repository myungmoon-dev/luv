import { useGetAlbumListSuspense } from "@/query/album";
import { useState, useEffect, useRef } from "react";
import { AlbumType } from "type";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ICommonAlbumListProps {
  albumType: AlbumType;
  albumName: string;
}

const ITEMS_PER_PAGE = 9;

const CommonAlbumList = ({ albumType, albumName }: ICommonAlbumListProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching } = useGetAlbumListSuspense(albumType, currentPage, ITEMS_PER_PAGE);
  const containerRef = useRef<HTMLDivElement>(null);

  const albums = data?.albums || [];
  const totalAlbums = data?.totalAlbums || 0;
  const totalPages = Math.ceil(totalAlbums / ITEMS_PER_PAGE);

  // 현재 페이지에 데이터가 없고 1페이지가 아니면 이전 페이지로 이동
  if (!isFetching && albums.length === 0 && currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
  }

  // 페이지 변경 시 스크롤을 앨범 섹션 상단으로 즉시 이동
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [currentPage]);

  return (
    <div ref={containerRef} className="flex flex-col gap-4 px-5 pb-10 sm:gap-6 sm:px-8 md:px-12 lg:px-16">
      <h2 className="pb-5 text-xl font-bold text-[#111111] sm:text-2xl md:text-3xl lg:text-4xl">{albumName} 앨범</h2>

      {!isFetching && albums.length > 0 && (
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* 앨범 그리드 */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {albums.map((album) => {
              const imageUrl = album.imageUrls?.[0];
              return (
                <div
                  key={album._id}
                  className="group cursor-pointer overflow-hidden bg-white shadow-md transition-all hover:shadow-xl"
                  onClick={() => imageUrl && setSelectedImage(imageUrl)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={album.title || "앨범 이미지"}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <p className="text-gray-400">No Image</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {(() => {
                  const pages = [];

                  // 총 페이지가 7개 이하면 모두 표시
                  if (totalPages <= 7) {
                    for (let i = 1; i <= totalPages; i++) {
                      pages.push(
                        <PaginationItem key={i}>
                          <PaginationLink
                            onClick={() => setCurrentPage(i)}
                            isActive={currentPage === i}
                            className="cursor-pointer"
                          >
                            {i}
                          </PaginationLink>
                        </PaginationItem>,
                      );
                    }
                  } else {
                    // 7개 이상이면 스마트 표시
                    const showEllipsisStart = currentPage > 3;
                    const showEllipsisEnd = currentPage < totalPages - 2;

                    // 첫 페이지
                    pages.push(
                      <PaginationItem key={1}>
                        <PaginationLink
                          onClick={() => setCurrentPage(1)}
                          isActive={currentPage === 1}
                          className="cursor-pointer"
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>,
                    );

                    // 시작 말줄임표
                    if (showEllipsisStart) {
                      pages.push(
                        <PaginationItem key="ellipsis-start">
                          <PaginationEllipsis />
                        </PaginationItem>,
                      );
                    }

                    // 현재 페이지 주변 페이지들
                    const startPage = Math.max(2, currentPage - 1);
                    const endPage = Math.min(totalPages - 1, currentPage + 1);

                    for (let i = startPage; i <= endPage; i++) {
                      pages.push(
                        <PaginationItem key={i}>
                          <PaginationLink
                            onClick={() => setCurrentPage(i)}
                            isActive={currentPage === i}
                            className="cursor-pointer"
                          >
                            {i}
                          </PaginationLink>
                        </PaginationItem>,
                      );
                    }

                    // 끝 말줄임표
                    if (showEllipsisEnd) {
                      pages.push(
                        <PaginationItem key="ellipsis-end">
                          <PaginationEllipsis />
                        </PaginationItem>,
                      );
                    }

                    // 마지막 페이지
                    pages.push(
                      <PaginationItem key={totalPages}>
                        <PaginationLink
                          onClick={() => setCurrentPage(totalPages)}
                          isActive={currentPage === totalPages}
                          className="cursor-pointer"
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>,
                    );
                  }

                  return pages;
                })()}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={selectedImage}
              alt="확대 이미지"
              className="max-h-[90vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-80 text-2xl font-bold text-black transition-colors hover:bg-opacity-100"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {!isFetching && albums.length === 0 && (
        <div className="flex h-40 items-center justify-center text-gray-400">
          <p>등록된 앨범이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default CommonAlbumList;
