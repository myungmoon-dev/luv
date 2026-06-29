import { useDeleteHomeImage, useGetHomeImages, usePostHomeImage } from "@/query/home";
import { processImages } from "@/hooks/useImageCompress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Plus, Trash2, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import ListPagination from "@/components/common/ListPagination";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import type { IHomeImage } from "type";

const HomeImage = () => {
  const [page, setPage] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState<IHomeImage | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isFetching } = useGetHomeImages({ page });
  const { mutate: postImage, isPending: isUploading } = usePostHomeImage();
  const { mutate: deleteImage, isPending: isDeleting } = useDeleteHomeImage();

  const images = data?.content ?? [];

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "banner");
    const formData = new FormData();
    formData.append("image", processed);
    postImage(formData, {
      onSuccess: () => toast.success("이미지가 추가되었습니다."),
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteImage(
      { id: deleteTarget.id },
      {
        onSuccess: () => { toast.success("삭제되었습니다."); setDeleteTarget(null); },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 pt-3">
          <div className="flex items-center justify-end">
            <Button size="sm" onClick={() => inputRef.current?.click()} disabled={isUploading}>
              {isUploading ? <Loader2 className="mr-1.5 size-4 animate-spin" /> : <Plus className="mr-1.5 size-4" />}
              이미지 추가
            </Button>
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          {isFetching ? (
            <div className="flex h-48 items-center justify-center">
              <Spinner />
            </div>
          ) : !images.length ? (
            <div className="flex h-48 flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImageIcon className="size-8 opacity-40" />
              <p className="text-sm">등록된 이미지가 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {images.map((img) => (
                <div key={img.id} className="group relative overflow-hidden rounded-lg border">
                  <img src={img.imageUrl} alt="" className="aspect-video w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setDeleteTarget(img)}
                    className="absolute right-1.5 top-1.5 flex size-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity hover:bg-red-600 group-hover:opacity-100"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <ListPagination page={page} totalPages={data?.totalPages ?? 0} onPageChange={setPage} />

      <DeleteConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="이미지를 삭제하시겠습니까?"
        description="삭제된 이미지는 복구할 수 없습니다."
        isPending={isDeleting}
      />
    </>
  );
};

export default HomeImage;
