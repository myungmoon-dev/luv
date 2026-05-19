"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const RichTextEditor = dynamic(
  () => import("@/components/common/rich-text-editor").then((mod) => mod.RichTextEditor),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[220px] items-center justify-center rounded-md border border-gray-300 bg-gray-50">
        <Loader2 className="size-8 animate-spin text-gray-400" aria-hidden />
      </div>
    ),
  },
);

export interface FamilyWorshipContentEditorProps {
  setValue: (value: string) => void;
  defaultValue?: string;
  /** 수정 시 API 데이터 로드 후 에디터 1회 마운트용 */
  mountKey?: string;
}

export function FamilyWorshipContentEditor({
  setValue,
  defaultValue,
  mountKey = "create",
}: FamilyWorshipContentEditorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">
        내용 <span className="text-red-500">*</span>
      </span>
      <div className="overflow-hidden rounded-md border border-gray-300">
        <RichTextEditor key={mountKey} setValue={setValue} defaultValue={defaultValue} />
      </div>
    </div>
  );
}
