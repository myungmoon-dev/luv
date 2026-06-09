import { IBulletin } from "type";

export interface IGetBulletinsResponse {
  content: IBulletin[];
  totalElements: number;
}

export interface IGetBulletinResponse extends IBulletin {}