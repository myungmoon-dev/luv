export interface IBook {
  _id: string;
  title: string;
  date: string;
  createdAt: number;
  imageUrls: string[];
  content: string;
  writer: string;
}

export interface IBookForm {
  title: string;
  date: string;
  content: string;
  writer: string;
}
