import { api } from ".";

export const getUser = async () => {
  const { data } = await api.get("/api/me");
  return data;
};

export const postLogin = async ({ email, password }: { email: string; password: string }) => {
  const { data } = await api.post("/api/login", { email, password });
  return data;
};

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
