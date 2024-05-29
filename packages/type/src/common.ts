export interface IBoardBase {
  id: string;
  createdAt: string;
  date: string;
  title: string;
  content: string;
}

export interface IBoardFormBase {
  date: string;
  title: string;
  content: string;
}

export interface IFile {
  file: File;
  name: string;
}

export type DrawerMenuKey = "/about" | "/sermons" | "/education" | "/news" | "/discipleship";
