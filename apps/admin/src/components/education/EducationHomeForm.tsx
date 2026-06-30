import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import ImageUpload from "@/components/common/ImageUpload";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  type IEducationHomeCoreValue,
  type IEducationHomeVision,
} from "@/api/education-home";
import { useGetEducationHome, usePatchEducationHome } from "@/query/education-home";
import { processImages } from "@/hooks/useImageCompress";

const EducationHomeForm = () => {
  const { data, isFetching } = useGetEducationHome();
  const { mutate, isPending } = usePatchEducationHome();

  const [heroImage, setHeroImage] = useState<File | null>(null);
  const [heroPreview, setHeroPreview] = useState<string | null>(null);
  const [heroImgClass, setHeroImgClass] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [missionLine1, setMissionLine1] = useState("");
  const [missionLine2, setMissionLine2] = useState("");
  const [visions, setVisions] = useState<IEducationHomeVision[]>([]);
  const [coreValues, setCoreValues] = useState<IEducationHomeCoreValue[]>([]);

  useEffect(() => {
    if (!data) return;
    setHeroPreview(data.heroImageUrl ?? null);
    setHeroImgClass(data.heroImgClass ?? "");
    setHeroSubtitle(data.heroSubtitle ?? "");
    setMissionLine1(data.missionLine1 ?? "");
    setMissionLine2(data.missionLine2 ?? "");
    setVisions(data.visions ?? []);
    setCoreValues(data.coreValues ?? []);
  }, [data]);

  const handleHeroChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const [processed] = await processImages([file], "banner");
    setHeroImage(processed);
    setHeroPreview(URL.createObjectURL(processed));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("heroImgClass", heroImgClass);
    form.append("heroSubtitle", heroSubtitle);
    form.append("missionLine1", missionLine1);
    form.append("missionLine2", missionLine2);
    form.append("visionsJson", JSON.stringify(visions));
    form.append("coreValuesJson", JSON.stringify(coreValues));
    if (heroImage) form.append("heroImage", heroImage);

    mutate(form, {
      onSuccess: () => {
        toast.success("저장되었습니다.");
        setHeroImage(null);
      },
      onError: () => toast.error("에러가 발생했습니다."),
    });
  };

  if (isFetching && !data) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Card>
        <CardHeader className="border-b py-3">
          <p className="text-sm font-semibold">히어로 배너</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 py-4">
          <ImageUpload
            preview={heroPreview}
            onChange={handleHeroChange}
            onRemove={() => {
              setHeroImage(null);
              setHeroPreview(null);
            }}
          />
          <Field label="배너 위치 클래스">
            <Input
              placeholder="예: object-[center_35%]"
              value={heroImgClass}
              onChange={(e) => setHeroImgClass(e.target.value)}
            />
          </Field>
          <Field label="배너 서브타이틀">
            <Input
              placeholder="예: 일어나라 빛을 발하라!"
              value={heroSubtitle}
              onChange={(e) => setHeroSubtitle(e.target.value)}
            />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="border-b py-3">
          <p className="text-sm font-semibold">사명 선언문</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 py-4">
          <Field label="1번째 줄">
            <Input
              placeholder="예: 명문교회 교육부서는"
              value={missionLine1}
              onChange={(e) => setMissionLine1(e.target.value)}
            />
          </Field>
          <Field label="2번째 줄">
            <Input
              placeholder="예: 하나님을 경외하는 다음세대를 세우기 위해 존재한다."
              value={missionLine2}
              onChange={(e) => setMissionLine2(e.target.value)}
            />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b py-3">
          <p className="text-sm font-semibold">비전 ({visions.length}개)</p>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() =>
              setVisions((prev) => [...prev, { lead: "", emphasis: "", bold: "" }])
            }
          >
            + 추가
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 py-4">
          {visions.map((v, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-md border p-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">VISION {String(i + 1).padStart(2, "0")}</p>
                <button
                  type="button"
                  onClick={() => setVisions((prev) => prev.filter((_, idx) => idx !== i))}
                  className="text-destructive text-xs"
                >
                  삭제
                </button>
              </div>
              <Textarea
                rows={2}
                className="resize-none"
                placeholder="앞 문구 (lead)"
                value={v.lead}
                onChange={(e) =>
                  setVisions((prev) => prev.map((x, idx) => (idx === i ? { ...x, lead: e.target.value } : x)))
                }
              />
              <Input
                placeholder="강조 부분 (emphasis)"
                value={v.emphasis}
                onChange={(e) =>
                  setVisions((prev) =>
                    prev.map((x, idx) => (idx === i ? { ...x, emphasis: e.target.value } : x)),
                  )
                }
              />
              <Input
                placeholder="굵은 부분 (bold)"
                value={v.bold}
                onChange={(e) =>
                  setVisions((prev) =>
                    prev.map((x, idx) => (idx === i ? { ...x, bold: e.target.value } : x)),
                  )
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b py-3">
          <p className="text-sm font-semibold">핵심가치 ({coreValues.length}개)</p>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() =>
              setCoreValues((prev) => [
                ...prev,
                { n: String(prev.length + 1).padStart(2, "0"), title: "" },
              ])
            }
          >
            + 추가
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 py-4">
          {coreValues.map((c, i) => (
            <div key={i} className="flex gap-2">
              <Input
                className="w-20"
                placeholder="01"
                value={c.n}
                onChange={(e) =>
                  setCoreValues((prev) =>
                    prev.map((x, idx) => (idx === i ? { ...x, n: e.target.value } : x)),
                  )
                }
              />
              <Input
                placeholder="제목"
                value={c.title}
                onChange={(e) =>
                  setCoreValues((prev) =>
                    prev.map((x, idx) => (idx === i ? { ...x, title: e.target.value } : x)),
                  )
                }
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="text-destructive size-9 shrink-0"
                onClick={() => setCoreValues((prev) => prev.filter((_, idx) => idx !== i))}
              >
                ✕
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button type="submit" disabled={isPending} isLoading={isPending}>
        저장
      </Button>
    </form>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium">{label}</Label>
    {children}
  </div>
);

export default EducationHomeForm;
