import { useGetPastorProfile, usePatchPastorProfile } from "@/query/pastor";
import { processImages } from "@/hooks/useImageCompress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type ImageSlot = "top" | "bottom";

const SLOT_LABEL: Record<ImageSlot, string> = {
  top: "상단 이미지",
  bottom: "하단 이미지",
};

const PastorProfile = () => {
  const { data: profile } = useGetPastorProfile();
  const { mutate: putProfile, isPending } = usePatchPastorProfile();

  const [previews, setPreviews] = useState<Partial<Record<ImageSlot, string>>>({});
  const [files, setFiles] = useState<Partial<Record<ImageSlot, File>>>({});

  const handleImageChange = async (slot: ImageSlot, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "banner");
    setFiles((prev) => ({ ...prev, [slot]: processed }));
    setPreviews((prev) => ({ ...prev, [slot]: URL.createObjectURL(processed) }));
  };

  const handleSave = () => {
    if (!files.top && !files.bottom) return toast.error("변경할 이미지를 선택해주세요.");
    const formData = new FormData();
    if (files.top) formData.append("topImage", files.top);
    if (files.bottom) formData.append("bottomImage", files.bottom);
    putProfile(formData, {
      onSuccess: () => {
        toast.success("프로필 이미지가 변경되었습니다.");
        setFiles({});
        setPreviews({});
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3 pt-4">
        <CardTitle className="text-base">프로필 이미지</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {(["top", "bottom"] as ImageSlot[]).map((slot) => {
            const currentUrl = slot === "top" ? profile?.topImageUrl : profile?.bottomImageUrl;
            const previewUrl = previews[slot] ?? currentUrl;

            return (
              <div key={slot} className="flex flex-col gap-2">
                <p className="text-sm font-medium">{SLOT_LABEL[slot]}</p>
                {previewUrl ? (
                  <label className="relative cursor-pointer overflow-hidden rounded-lg border">
                    <img src={previewUrl} alt={SLOT_LABEL[slot]} className="h-48 w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                      <p className="text-sm font-medium text-white">클릭하여 변경</p>
                    </div>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageChange(slot, e)} />
                  </label>
                ) : (
                  <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex h-48 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed transition-colors">
                    <ImageIcon className="text-muted-foreground/50 size-6" />
                    <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageChange(slot, e)} />
                  </label>
                )}
              </div>
            );
          })}
        </div>

        <Button
          className="w-full sm:w-auto sm:self-end"
          onClick={handleSave}
          disabled={isPending || (!files.top && !files.bottom)}
        >
          {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
          저장
        </Button>
      </CardContent>
    </Card>
  );
};

export default PastorProfile;
