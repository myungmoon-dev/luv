type UserRole = "missionary";

export interface IUser {
  email: string;
  id: string;
  name: string;
  phone: string;
  role: UserRole;
}
