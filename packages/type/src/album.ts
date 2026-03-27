export type AlbumType =
  | "all"
  | "main"
  | "infants"
  | "toddlers"
  | "elementary"
  | "middle"
  | "high"
  | "2youth"
  | "1youth"
  | "qt"
  | "panorama"
  | "newFamilly"
  | "newlyweds"
  | "3040";

export interface IAlbum {
  id: string;
  title: string;
  date: string;
  albumType: AlbumType;
  imageUrls: string[];
  createdAt: number;
}

export interface IGetAlbumListResponse {
  content: IAlbum[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
  isFirst: boolean;
}

export interface IGetAlbumRequest {
  id: string;
}

export interface IGetAlbumResponse extends IAlbum {}
