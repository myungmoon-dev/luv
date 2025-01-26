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
  _id: string;
  title: string;
  date: string;
  type: AlbumType;
  imageUrls: string[];
  createdAt: number;
}

export interface IGetAlbumResponse {
  albums: IAlbum[];
  totalAlbums: number;
}
