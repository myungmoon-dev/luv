import { api } from "@/lib/api";
import type { BoardType } from "type";

export type BoardListItem = {
  id: string;
  type: BoardType;
  title: string;
  writer: string;
  createdAt: number;
  hasImages: boolean;
  hasFiles: boolean;
};

export type BoardDetailData = {
  id: string;
  type: BoardType;
  title: string;
  writer: string;
  content: string;
  imageUrls: string[];
  fileUrls: string[];
  createdAt: number;
  updatedAt: number;
};

function unwrapPayload(raw: unknown): unknown {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && "data" in raw) {
    const inner = (raw as Record<string, unknown>).data;
    if (inner !== undefined) return inner;
  }
  return raw;
}

function toStringArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((u): u is string => typeof u === "string") : [];
}

function toNumber(v: unknown): number {
  return typeof v === "number" ? v : Number(v) || 0;
}

function parseBoard(raw: Record<string, unknown>): BoardDetailData | null {
  const idRaw = raw.id ?? raw._id;
  if (typeof idRaw !== "string") return null;
  return {
    id: idRaw,
    type: String(raw.type ?? "") as BoardType,
    title: String(raw.title ?? ""),
    writer: String(raw.writer ?? ""),
    content: String(raw.content ?? ""),
    imageUrls: toStringArray(raw.imageUrls),
    fileUrls: toStringArray(raw.fileUrls),
    createdAt: toNumber(raw.createdAt),
    updatedAt: toNumber(raw.updatedAt),
  };
}

function parsePagedBoards(payload: unknown): { list: BoardDetailData[]; total: number } {
  const data = unwrapPayload(payload);

  if (Array.isArray(data)) {
    const list = data
      .map((item) =>
        item && typeof item === "object" ? parseBoard(item as Record<string, unknown>) : null,
      )
      .filter((x): x is BoardDetailData => x !== null);
    return { list, total: list.length };
  }

  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    const content = o.content;
    if (Array.isArray(content)) {
      const list = content
        .map((item) =>
          item && typeof item === "object" ? parseBoard(item as Record<string, unknown>) : null,
        )
        .filter((x): x is BoardDetailData => x !== null);
      const total = o.totalElements !== undefined ? toNumber(o.totalElements) || list.length : list.length;
      return { list, total };
    }
  }

  return { list: [], total: 0 };
}

/** GET /api/boards — query: type?, page(0부터), size */
export async function getBoards({
  page,
  size,
  type,
}: {
  /** 목록 UI와 동일하게 1부터 */
  page: number;
  size: number;
  type?: BoardType;
}): Promise<{ boards: BoardListItem[]; totalCount: number }> {
  const apiPage = Math.max(0, page - 1);
  const params: Record<string, string | number> = { page: apiPage, size };
  if (type !== undefined) params.type = type;

  const { data } = await api.get<unknown>("/boards", { params });
  const { list, total } = parsePagedBoards(data);

  return {
    boards: list.map((b) => ({
      id: b.id,
      type: b.type,
      title: b.title,
      writer: b.writer,
      createdAt: b.createdAt,
      hasImages: b.imageUrls.length > 0,
      hasFiles: b.fileUrls.length > 0,
    })),
    totalCount: total,
  };
}

/** GET /api/boards/{id} */
export async function getBoard(boardId: string): Promise<BoardDetailData | null> {
  const { data } = await api.get<unknown>(`/boards/${boardId}`);
  const raw = unwrapPayload(data);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  return parseBoard(raw as Record<string, unknown>);
}
