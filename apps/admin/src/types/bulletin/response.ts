import { IBulletin } from "type";
import { PageResponse } from "../common";

export type IGetBulletinsResponse = PageResponse<IBulletin>;

export interface IGetBulletinResponse extends IBulletin {}
