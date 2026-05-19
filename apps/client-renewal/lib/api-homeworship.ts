import { api } from "@/lib/api";
import { coerceEpochMs } from "@/lib/epoch-ms";
import type { IHomeWorship, IHomeworshipComment } from "type";

export interface IGetHomeWorshipsResponse {
  homeworships: IHomeWorship[];
  totalHomeworships: number;
}

export type GetHomeWorshipsParams = {
  /** UI·URL 기준 1부터 */
  page: number;
  size: number;
};

function unwrapPayload(raw: unknown): unknown {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && "data" in raw) {
    const inner = (raw as Record<string, unknown>).data;
    if (inner !== undefined) return inner;
  }
  return raw;
}

function coerceNonNegativeInt(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v) && v >= 0) return Math.floor(v);
  if (typeof v === "bigint") return Number(v);
  if (typeof v === "string" && v.trim()) {
    const n = Number(v);
    if (Number.isFinite(n) && n >= 0) return Math.floor(n);
  }
  return undefined;
}

function pickTotalElements(o: Record<string, unknown>): number | undefined {
  const keys = ["totalElements", "total_elements", "totalRecords", "total_records", "total"];
  for (const k of keys) {
    const n = coerceNonNegativeInt(o[k]);
    if (n !== undefined) return n;
  }
  return undefined;
}

function pickTotalPages(o: Record<string, unknown>): number | undefined {
  const keys = ["totalPages", "total_pages"];
  for (const k of keys) {
    const n = coerceNonNegativeInt(o[k]);
    if (n !== undefined && n >= 1) return n;
  }
  return undefined;
}

function mapComment(raw: Record<string, unknown>): IHomeworshipComment | null {
  const id = raw.id ?? raw._id;
  if (typeof id !== "string") return null;
  return {
    _id: id,
    userName: String(raw.userName ?? ""),
    password: typeof raw.password === "string" ? raw.password : "",
    content: String(raw.content ?? ""),
    createdAt: coerceEpochMs(raw.createdAt),
  };
}

function mapHomeWorship(raw: Record<string, unknown>): IHomeWorship | null {
  const id = raw.id ?? raw._id;
  if (typeof id !== "string") return null;

  const commentsRaw = raw.comments;
  const comments = Array.isArray(commentsRaw)
    ? commentsRaw
        .map((c) =>
          c && typeof c === "object" ? mapComment(c as Record<string, unknown>) : null,
        )
        .filter((x): x is IHomeworshipComment => x !== null)
    : [];

  const imageUrlsRaw = raw.imageUrls ?? raw.image_urls;
  const imageUrls = Array.isArray(imageUrlsRaw)
    ? imageUrlsRaw.filter((u): u is string => typeof u === "string")
    : [];

  return {
    _id: id,
    date: String(raw.date ?? ""),
    title: String(raw.title ?? ""),
    content: String(raw.content ?? ""),
    createdAt: coerceEpochMs(raw.createdAt),
    updatedAt: coerceEpochMs(raw.updatedAt),
    imageUrls,
    userName: String(raw.userName ?? ""),
    password: typeof raw.password === "string" ? raw.password : "",
    isPinned: Boolean(raw.isPinned),
    comments,
  };
}

function parseHomeWorshipList(payload: unknown, pageSize: number): {
  list: IHomeWorship[];
  total: number;
} {
  const data = unwrapPayload(payload);

  if (Array.isArray(data)) {
    const list = data
      .map((row) =>
        row && typeof row === "object" ? mapHomeWorship(row as Record<string, unknown>) : null,
      )
      .filter((x): x is IHomeWorship => x !== null);
    return { list, total: list.length };
  }

  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const content = o.content;
    if (Array.isArray(content)) {
      const list = content
        .map((row) =>
          row && typeof row === "object" ? mapHomeWorship(row as Record<string, unknown>) : null,
        )
        .filter((x): x is IHomeWorship => x !== null);

      const te = pickTotalElements(o);
      const tp = pickTotalPages(o);
      let total =
        te ??
        (tp !== undefined ? tp * Math.max(1, pageSize) : undefined) ??
        list.length;

      if (typeof total !== "number" || !Number.isFinite(total)) {
        total = list.length;
      }

      return { list, total };
    }
  }

  return { list: [], total: 0 };
}

/** GET /api/homeworships — 서버 page 0부터 · `{ content, totalElements }` */
export async function getHomeWorships(params: GetHomeWorshipsParams): Promise<IGetHomeWorshipsResponse> {
  const { page, size } = params;
  const apiPage = Math.max(0, page - 1);
  const { data } = await api.get<unknown>("/homeworships", {
    params: { page: apiPage, size },
  });

  const { list, total } = parseHomeWorshipList(data, size);
  return { homeworships: list, totalHomeworships: total };
}

export async function getHomeWorship(homeWorshipId: string): Promise<IHomeWorship | null> {
  const { data } = await api.get<unknown>(`/homeworships/${homeWorshipId}`);
  const raw = unwrapPayload(data);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  return mapHomeWorship(raw as Record<string, unknown>);
}

const multipartFormHeaders = { "Content-Type": "multipart/form-data" } as const;

export async function postHomeWorship(homeWorship: FormData) {
  /** multipart: `isPinned`는 `String(boolean)`, `images`는 동일 파트명으로 파일 반복 append */
  const { data } = await api.post("/homeworships", homeWorship, {
    headers: multipartFormHeaders,
  });
  return data;
}

export type PatchHomeWorshipParams = {
  homeWorshipId: string;
  title: string;
  date: string;
  content: string;
  password: string;
  existingImageUrls: string[];
  images: File[];
};

/** PATCH /api/homeworships/:id — multipart: title, date, content, password, existingImageUrls, images */
export async function patchHomeWorship({
  homeWorshipId,
  title,
  date,
  content,
  password,
  existingImageUrls,
  images,
}: PatchHomeWorshipParams) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("date", date);
  formData.append("content", content);
  formData.append("password", password);
  existingImageUrls.forEach((url) => formData.append("existingImageUrls", url));
  images.forEach((file) => formData.append("images", file));

  const { data } = await api.patch(`/homeworships/${homeWorshipId}`, formData, {
    headers: multipartFormHeaders,
  });
  return data;
}

export async function deleteHomeWorship({ homeWorshipId, password }: { homeWorshipId: string; password: string }) {
  const { data } = await api.delete(`/homeworships/${homeWorshipId}`, { data: { password } });
  return data;
}

export async function postHomeWorshipComment({
  homeWorshipId,
  content,
  userName,
  password,
}: {
  homeWorshipId: string;
  content: string;
  userName: string;
  password: string;
}) {
  const { data } = await api.post(`/homeworships/${homeWorshipId}/comments`, {
    content,
    userName,
    password,
  });
  return data;
}

export async function deleteHomeWorshipComment({
  homeWorshipId,
  commentId,
  password,
}: {
  homeWorshipId: string;
  commentId: string;
  password: string;
}) {
  const { data } = await api.delete(`/homeworships/${homeWorshipId}/comments/${commentId}`, { data: { password } });
  return data;
}
