import { getApps, initializeApp, type FirebaseApp } from "firebase/app";

const envConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** next build 등 환경 변수가 없을 때 initializeApp만 통과시키기 위한 자리 표시자(실제 Auth/네트워크 호출은 하지 않음). */
const BUILD_PLACEHOLDER_CONFIG = {
  apiKey: "AIzaSy0000000000000000000000000000000",
  authDomain: "build-placeholder.firebaseapp.com",
  projectId: "build-placeholder",
  storageBucket: "build-placeholder.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
} as const;

function resolveConfig() {
  if (envConfig.apiKey) {
    return {
      apiKey: envConfig.apiKey,
      authDomain: envConfig.authDomain ?? "",
      projectId: envConfig.projectId ?? "",
      storageBucket: envConfig.storageBucket,
      messagingSenderId: envConfig.messagingSenderId,
      appId: envConfig.appId,
    };
  }
  return { ...BUILD_PLACEHOLDER_CONFIG };
}

export function getFirebaseApp(): FirebaseApp {
  const existing = getApps()[0];
  if (existing) {
    return existing;
  }
  return initializeApp(resolveConfig());
}

export const firebase = getFirebaseApp();
