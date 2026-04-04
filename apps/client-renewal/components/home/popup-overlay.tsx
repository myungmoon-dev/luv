"use client";

import { X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { resolvePopupImageUrl, type Popup } from "@/lib/api-popup";

type Props = { popups: Popup[] };

export function PopupOverlay({ popups }: Props) {
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(() => new Set());

  const visible = useMemo(
    () => popups.filter((p) => !hiddenIds.has(p.id)),
    [popups, hiddenIds],
  );

  const current = visible[0];
  const imageSrc = current ? resolvePopupImageUrl(current.imageUrl) : "";

  const dismissCurrent = useCallback(() => {
    if (!current) return;
    setHiddenIds((prev) => new Set(prev).add(current.id));
  }, [current]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal
      aria-label={current.title || "팝업"}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
      onClick={dismissCurrent}
      onKeyDown={(e) => e.key === "Escape" && dismissCurrent()}
    >
      <div
        className="relative max-h-[90vh] max-w-[min(92vw,900px)] overflow-auto rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismissCurrent}
          className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          aria-label="닫기"
        >
          <X className="size-5" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element -- 원격/상대 URL 혼재 */}
        <img src={imageSrc} alt={current.title || "팝업"} className="block max-h-[85vh] w-auto max-w-full" />
        {visible.length > 1 ? (
          <p className="border-t px-4 py-2 text-center text-sm text-neutral-500">
            {visible.length - 1}개의 팝업이 더 있습니다. 닫으면 다음이 표시됩니다.
          </p>
        ) : null}
      </div>
    </div>
  );
}
