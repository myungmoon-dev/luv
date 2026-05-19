import { api } from "@/lib/api";
import type { IBook } from "type";

export type GetBooksParams = {
  /** URL·UI 기준 1부터 */
  page: number;
  size: number;
};

type BookDto = {
  id?: string;
  _id?: string;
  title?: string;
  content?: string;
  writer?: string;
  date?: string;
  imageUrls?: string[];
  createdAt?: number;
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

/** Spring Page 또는 변형 필드명에서 전체 원소 수 후보 순으로 읽기 */
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

function parseBookList(payload: unknown, pageSize: number): { list: unknown[]; total: number } {
  const data = unwrapPayload(payload);

  if (Array.isArray(data)) {
    return { list: data, total: data.length };
  }

  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const content = o.content;
    if (Array.isArray(content)) {
      const te = pickTotalElements(o);
      const tp = pickTotalPages(o);

      /** totalElements가 없을 때 현재 줄 수만 넣으면 항상 1쪽으로 간주되어 페이지네이션 UI가 안 뜸 */
      let total =
        te ??
        (tp !== undefined ? tp * Math.max(1, pageSize) : undefined) ??
        content.length;

      if (typeof total !== "number" || !Number.isFinite(total)) {
        total = content.length;
      }

      return { list: content, total };
    }
  }

  return { list: [], total: 0 };
}

function mapBook(dto: BookDto): IBook | null {
  const id = dto._id ?? dto.id;
  if (!id) return null;

  const imageUrls = dto.imageUrls ?? [];
  return {
    _id: String(id),
    title: String(dto.title ?? ""),
    content: String(dto.content ?? ""),
    writer: String(dto.writer ?? ""),
    date: String(dto.date ?? ""),
    imageUrls: Array.isArray(imageUrls) ? imageUrls.filter((x): x is string => typeof x === "string") : [],
    createdAt: typeof dto.createdAt === "number" ? dto.createdAt : Number(dto.createdAt) || 0,
  };
}

/** GET /api/books — 서버는 page 0부터 · 응답 `{ content, totalElements }` */
export async function getBooks({ page, size }: GetBooksParams) {
  const apiPage = Math.max(0, page - 1);
  const { data } = await api.get<unknown>("/books", {
    params: { page: apiPage, size },
  });

  const { list, total } = parseBookList(data, size);
  const books = list
    .map((v) => mapBook(v as BookDto))
    .filter((b): b is IBook => b !== null);

  return { books, totalBooksCount: total };
}
