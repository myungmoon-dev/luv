export interface IBoardBase {
  id: string;
  createdAt: string;
  date: string;
  title: string;
  images: string[];
  buffers?: string[];
}

export interface IFile {
  file: File;
  name: string;
}
