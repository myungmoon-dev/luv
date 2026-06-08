export type ThemeType = "dark" | "light";

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
  isFirst: boolean;
}
