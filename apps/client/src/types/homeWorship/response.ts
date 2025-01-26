import { IHomeWorship } from "type";

export interface IGetHomeWorshipsResponse {
  homeworships: IHomeWorship[];
  totalHomeworships: number;
}

export interface IGetHomeWorshipResponse extends IHomeWorship {}
