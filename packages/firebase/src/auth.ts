import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../firebase";

const auth = getAuth(firebase);

// FIXME: test
export const getTest = () => {
  return auth.name;
};

export const postLogin = async ({ email, password }: { email: string; password: string }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export const getMe = () => {
  const user = auth;
  return user;
};
