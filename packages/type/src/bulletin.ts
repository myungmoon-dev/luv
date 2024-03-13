export interface IBulletin {
  id: string;
  createdAt: string;
  date: string;
  title: string;
  images: string[];
}

export interface IBulletinForm {
  date: string;
  title: string;
  images: string[];
}
