// pages/popup.tsx (App Router이면 app/popup/page.tsx)
import { useSearchParams } from "next/navigation";

export default function PopupImagePage() {
  const searchParams = useSearchParams();
  const src = searchParams.get("src");

  if (!src) return <div>이미지가 없습니다.</div>;

  return (
    <div style={{ padding: 20 }}>
      <img src={src} alt="popup" style={{ maxWidth: "100%", maxHeight: "90vh" }} />
    </div>
  );
}
