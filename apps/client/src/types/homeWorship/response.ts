import { IHomeWorship } from "type";

export interface IGetHomeWorshipsResponse {
  homeWorships: IHomeWorship[];
}

export interface IGetHomeWorshipResponse {
  homeWorship: IHomeWorship;
}
