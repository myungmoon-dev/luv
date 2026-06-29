import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useDeleteEducation, useGetEducations } from "@/query/education";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import EducationFormDialog from "./EducationFormDialog";
import { EDUCATION_TYPE_OPTIONS } from "./config";
import type { IEducation } from "@/api/education";

const Education = () => {
  const { data: list = [], isFetching } = useGetEducations();
  const { mutate: deleteMutation, isPending: isDeleting } = useDeleteEducation();

  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<IEducation | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<IEducation | null>(null);

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteMutation(
      { id: deleteTarget.id },
      {
        onSuccess: () => {
          toast.success("삭제되었습니다.");
          setDeleteTarget(null);
        },
        onError: () => toast.error("에러가 발생했습니다."),
      },
    );
  };

  const handleEdit = (item: IEducation) => {
    setTimeout(() => {
      setEditTarget(item);
      setFormOpen(true);
    }, 0);
  };

  const handleAdd = () => {
    setEditTarget(null);
    setFormOpen(true);
  };

  // 등록 안 된 부서
  const registeredTypes = new Set(list.map((e) => e.type));
  const unregistered = EDUCATION_TYPE_OPTIONS.filter((opt) => !registeredTypes.has(opt.value));

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3 pt-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              등록 {list.length}/{EDUCATION_TYPE_OPTIONS.length}
            </p>
            <Button size="sm" onClick={handleAdd}>
              <Plus className="mr-1.5 size-4" />
              부서 등록
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          {isFetching ? (
            <div className="flex h-32 items-center justify-center">
              <Spinner />
            </div>
          ) : list.length === 0 ? (
            <div className="text-muted-foreground flex h-32 items-center justify-center text-sm">
              등록된 부서가 없습니다.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((item) => (
                <DepartmentCard
                  key={item.id}
                  item={item}
                  onEdit={() => handleEdit(item)}
                  onDelete={() => setDeleteTarget(item)}
                />
              ))}
            </div>
          )}

          {unregistered.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="mb-2 text-xs text-muted-foreground">미등록 부서</p>
              <div className="flex flex-wrap gap-2">
                {unregistered.map((opt) => (
                  <span
                    key={opt.value}
                    className="rounded-md border bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {opt.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <EducationFormDialog
        open={formOpen}
        target={editTarget}
        onClose={() => {
          setFormOpen(false);
          setEditTarget(null);
        }}
      />

      <DeleteConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={`${deleteTarget?.department ?? ""}을(를) 삭제하시겠습니까?`}
        isPending={isDeleting}
      />
    </>
  );
};

const DepartmentCard = ({
  item,
  onEdit,
  onDelete,
}: {
  item: IEducation;
  onEdit: () => void;
  onDelete: () => void;
}) => (
  <div className="relative overflow-hidden rounded-lg border">
    {item.heroImageUrl && (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={item.heroImageUrl} alt={item.department} className="h-32 w-full object-cover" />
    )}
    <div className="p-3">
      <p className="text-base font-semibold">{item.department}</p>
      <p className="text-xs text-muted-foreground">{item.target}</p>
      <p className="text-xs text-muted-foreground">{item.time}</p>
      <p className="mt-2 line-clamp-2 text-xs">{item.introduction}</p>
      <div className="mt-3 flex justify-end gap-1">
        <Button size="icon" variant="ghost" className="size-7" onClick={onEdit}>
          <Pencil className="size-3.5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-destructive hover:text-destructive size-7"
          onClick={onDelete}
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </div>
  </div>
);

export default Education;
