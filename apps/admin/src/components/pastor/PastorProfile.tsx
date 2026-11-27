import { useGetPastorProfile, usePatchPastorProfile } from "@/query/pastor";
import { processImages } from "@/hooks/useImageCompress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * 홈페이지 담임목사(인사말) 페이지는 하단 이미지(bottomImage)만 사용한다.
 * 상단 이미지(topImage)는 더 이상 노출되지 않으므로 관리하지 않는다.
 */
const PastorProfile = () => {
  const { data: profile } = useGetPastorProfile();
  const { mutate: putProfile, isPending } = usePatchPastorProfile();

  const [preview, setPreview] = useState<string>();
  const [file, setFile] = useState<File>();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    e.target.value = "";
    if (!selected) return;
    const [processed] = await processImages([selected], "banner");
    setFile(processed);
    setPreview(URL.createObjectURL(processed));
  };

  const handleSave = () => {
    if (!file) return toast.error("변경할 이미지를 선택해주세요.");
    const formData = new FormData();
    formData.append("bottomImage", file);
    putProfile(formData, {
      onSuccess: () => {
        toast.success("프로필 이미지가 변경되었습니다.");
        setFile(undefined);
        setPreview(undefined);
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  const previewUrl = preview ?? profile?.bottomImageUrl;

  return (
    <Card>
      <CardHeader className="pb-3 pt-4">
        <CardTitle className="text-base">프로필 이미지</CardTitle>
        <p className="text-muted-foreground text-sm">
          홈페이지 담임목사 인사말 페이지에 표시됩니다. 세로 사진(4:5 비율)을 권장합니다.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="w-full max-w-xs">
          {previewUrl ? (
            <label className="relative block cursor-pointer overflow-hidden rounded-lg border">
              <img src={previewUrl} alt="프로필 이미지" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                <p className="text-sm font-medium text-white">클릭하여 변경</p>
              </div>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          ) : (
            <label className="border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30 flex aspect-[4/5] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed transition-colors">
              <ImageIcon className="text-muted-foreground/50 size-6" />
              <span className="text-muted-foreground text-sm">클릭하여 이미지 업로드</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          )}
        </div>

        <Button className="w-full sm:w-auto sm:self-end" onClick={handleSave} disabled={isPending || !file}>
          {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
          저장
        </Button>
      </CardContent>
    </Card>
  );
};

export default PastorProfile;
