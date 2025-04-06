import { IBulletin } from "type";

export interface IGetBulletinsResponse {
  bulletins: IBulletin[];
  totalBulletins: number;
}

export interface IGetBulletinResponse extends IBulletin {}
