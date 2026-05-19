import { Suspense } from "react";

import { PopupImage } from "./popup-image";

export default function PopupPage() {
  return (
    <Suspense fallback={<div className="p-5 text-neutral-500">로딩 중…</div>}>
      <PopupImage />
    </Suspense>
  );
}
