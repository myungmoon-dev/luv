export interface IPopup {
  _id: string;
  title: string;
  isShow: boolean;
  imageUrl: string;
  createdAt: number;
}

export interface IPopupForm {
  title: string;
  isShow: boolean;
}
