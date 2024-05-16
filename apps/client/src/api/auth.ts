import { api } from ".";

export const postSignUp = async ({
  email,
  password,
  confirmationPassword,
  name,
  phone,
}: {
  email: string;
  password: string;
  confirmationPassword: string;
  name: string;
  phone: string;
}) => {
  const { data } = await api.post("/api/signup", { email, password, confirmationPassword, name, phone });
  return data;
};
