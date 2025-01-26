import { IBible } from "type";

export interface IGetBiblesResponse {
  bibles: IBible[];
}

export interface IGetBibleResponse extends IBible {}
