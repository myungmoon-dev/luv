export interface IGetPopupsRequest {
  onlyShow: boolean | null;
}

export interface IPutPopupShowRequest {
  id: string;
  isShow: boolean;
}
