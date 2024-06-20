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
  idx: number;
  title: string;
  date: string;
  albumType: AlbumType;
  images: string[];
  createdAt: number;
}

export interface IGetAlbumResponse {
  albumList: IAlbum[];
}
