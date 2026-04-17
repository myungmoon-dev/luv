export type AlbumType =
  | "main"
  | "infants"
  | "toddlers"
  | "children"
  | "teens"
  | "youth"
  | "bridge"
  | "qt"
  | "panorama"
  | "newFamily"
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
