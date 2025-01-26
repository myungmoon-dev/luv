import { IBook } from "type";

export interface IGetBooksResponse {
  books: IBook[];
  totalBooks: number;
}

export interface IGetBookResponse extends IBook {}
