import { api } from "@/lib/api";

export type Popup = {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: number;
  show: boolean;
};

function extractPopupList(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (payload && typeof payload === "object") {
    const o = payload as Record<string, unknown>;
    /* 인터셉터 미적용 시 { httpCode, data: Popup[] } */
    if (Array.isArray(o.data)) return o.data;
    if (Array.isArray(o.popups)) return o.popups;
    if (Array.isArray(o.items)) return o.items;
  }
  return [];
}

function mapRawToPopup(raw: unknown): Popup | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const imageUrl = (r.imageUrl ?? r.image_url) as string | undefined;
  if (!imageUrl || typeof imageUrl !== "string") return null;

  const show = r.show;
  if (show === false || show === "false" || show === 0) return null;

  const created = r.createdAt ?? r.created_at;
  const createdAt =
    typeof created === "number" && Number.isFinite(created)
      ? created
      : typeof created === "string"
        ? Number(created) || 0
        : 0;

  return {
    id: String(r.id ?? ""),
    title: String(r.title ?? ""),
    imageUrl,
    createdAt,
    show: true,
  };
}

/** 상대 경로 이미지를 API origin 기준 절대 URL로 */
export function resolvePopupImageUrl(imageUrl: string): string {
  const trimmed = imageUrl.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const base =
    process.env.NEXT_PUBLIC_CLIENT_RENEWAL_API_ORIGIN?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL?.replace(/\/$/, "") ||
    "";
  if (!base) return trimmed;
  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${base}${path}`;
}

/** onlyShow=true 고정. 래퍼 언랩 후 data가 배열 또는 { popups } 모두 허용 */
export async function getPopups(): Promise<Popup[]> {
  const { data } = await api.get<unknown>("/popups", {
    params: { onlyShow: true },
  });
  const list = extractPopupList(data);
  return list.map(mapRawToPopup).filter((p): p is Popup => p !== null);
}
