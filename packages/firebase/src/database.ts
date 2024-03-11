// Database - FireStore

import {
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  limit,
} from "firebase/firestore";
import { firebase } from "../firebase";

interface ICreateLiveLinkProps {
  videoId: string;
}

const database = getFirestore(firebase);

// TODO: 유튜브 아이디 추출함수 추가해야 함
export const createLiveLink = async ({ videoId }: ICreateLiveLinkProps) => {
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
