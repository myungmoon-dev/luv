import { IBook } from "type";

export interface IGetBooksResponse {
  content: IBook[];
  totalElements: number;
}

export interface IGetBookResponse extends IBook {}