import { IBook } from "type";

export interface IGetBooksResponse {
  books: IBook[];
  totalBooksCount: number;
}
