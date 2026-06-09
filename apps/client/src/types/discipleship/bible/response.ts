import { IBible } from "type";

export interface IGetBiblesResponse {
  content: IBible[];
  totalElements: number;
}

export interface IGetBibleResponse extends IBible {}