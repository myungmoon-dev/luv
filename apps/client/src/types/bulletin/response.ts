import { IBulletin } from "type";

export interface IGetBulletinsResponse {
  bulletins: IBulletin[];
}

export interface IGetBulletinResponse {
  bulletin: IBulletin;
}
