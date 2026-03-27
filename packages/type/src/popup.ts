export interface IPopup {
  id: string;
  title: string;
  show: boolean;
  imageUrl: string;
  createdAt: number;
}

export interface IPopupForm {
  title: string;
  isShow: boolean;
}
