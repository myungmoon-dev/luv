import { IHomeWorship } from "type";

export interface IGetHomeWorshipsResponse {
  homeWorships: IHomeWorship[];
  notPinnedCount: number;
  pinnedCount: number;
}

export interface IGetHomeWorshipResponse {
  homeWorship: IHomeWorship;
}
