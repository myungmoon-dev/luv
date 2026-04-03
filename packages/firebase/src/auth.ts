import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  type Auth,
} from "firebase/auth";

import { getFirebaseApp } from "../firebase";

let authInstance: Auth | undefined;

function getAuthSingleton(): Auth {
  if (!authInstance) {
    authInstance = getAuth(getFirebaseApp());
  }
  return authInstance;
}

/** next build SSG 시 모듈 로드만으로 getAuth가 돌지 않도록 지연 초기화합니다. */
export const auth = new Proxy({} as Auth, {
  get(_target, prop, _receiver) {
    const instance = getAuthSingleton();
    const value = Reflect.get(instance as object, prop, instance);
    if (typeof value === "function") {
      return (value as (...args: unknown[]) => unknown).bind(instance);
    }
    return value;
  },
});

// FIXME: test
export const getTest = () => {
  return getAuthSingleton().name;
};

export const postLogin = async ({ email, password }: { email: string; password: string }) => {
  const userCredential = await signInWithEmailAndPassword(getAuthSingleton(), email, password);
  return userCredential;
};

export const postSignup = async ({ email, password }: { email: string; password: string }) => {
  const userCredential = await createUserWithEmailAndPassword(getAuthSingleton(), email, password);
  return userCredential.user;
};
