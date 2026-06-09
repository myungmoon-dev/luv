import { IHomeWorship } from "type";

export interface IGetHomeWorshipsResponse {
  content: IHomeWorship[];
  totalElements: number;
}

export interface IGetHomeWorshipResponse extends IHomeWorship {}
