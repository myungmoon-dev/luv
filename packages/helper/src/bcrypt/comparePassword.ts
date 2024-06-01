import { compare } from "bcrypt";

export const comparePassword = async (password: string, hashedPassword: string) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};
