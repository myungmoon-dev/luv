// Database - FireStore

import {
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  updateDoc,
} from "firebase/firestore";
import { firebase } from "../firebase";
import { ref } from "firebase/storage";
import { storage, uploadImg } from "./storage";

interface IYoutubeProps {
  videoId: string;
}
interface IProps {
  title: string;
  file: File;
}

const database = getFirestore(firebase);

// TODO: 유튜브 아이디 추출함수 추가해야 함
export const createLiveLink = async ({ videoId }: IYoutubeProps) => {
  await addDoc(collection(database, "youtube"), {
    videoId,
    createdAt: Date.now(),
  });
};

export const getLiveLink = async () => {
  const getQuery = query(
    collection(database, "youtube"),
    orderBy("createdAt", "desc"),
    limit(1)
  );

  const liveLink = await getDocs(getQuery);
  return liveLink;
};

export const createShorts = async ({ videoId }: IYoutubeProps) => {
  await addDoc(collection(database, "shorts"), {
    videoId,
    createdAt: Date.now(),
  });
};

export const getShorts = async () => {
  const getQuery = query(
    collection(database, "shorts"),
    orderBy("createdAt", "desc"),
    limit(1)
  );

  const shorts = await getDocs(getQuery);
  return shorts;
};

export const createTest = async ({ title, file }: IProps) => {
  const doc = await addDoc(collection(database, "test"), {
    title,
    createdAt: Date.now(),
  });
  const url = await uploadImg({ file });

  updateDoc(doc, {
    url,
  });
};
