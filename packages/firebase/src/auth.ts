import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../firebase";

export const auth = getAuth(firebase);

// FIXME: test
export const getTest = () => {
  return auth.name;
};

export const postLogin = async ({ email, password }: { email: string; password: string }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export const postSignup = async ({ email, password }: { email: string; password: string }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};
