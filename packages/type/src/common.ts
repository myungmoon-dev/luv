export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
  isFirst: boolean;
}

export interface IBoardBase {
  id: string;
  createdAt: string;
  date: string;
  title: string;
  content: string;
}

export interface IBoardFormBase {
  date: string;
  title: string;
  content: string;
}

export interface IFile {
  file: File;
  name: string;
}
