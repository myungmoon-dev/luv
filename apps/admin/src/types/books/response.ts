import { IBook } from "type";
import { PageResponse } from "../common";

export type IGetBooksResponse = PageResponse<IBook>;

export interface IGetBookResponse extends IBook {}
