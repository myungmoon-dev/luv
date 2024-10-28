import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore";
import { collections, database } from ".";
import { IMissionNewsForm } from "type";

export const getMissionNewsList = async ({
  lastVisibleCreatedAt,
}: {
  lastVisibleCreatedAt?: string;
}) => {
  let getQuery;

  if (lastVisibleCreatedAt) {
    getQuery = query(
      collection(database, collections.missionNews),
      orderBy("createdAt", "desc"),
      limit(5),
      startAfter(Number(lastVisibleCreatedAt)),
    );
  } else {
    getQuery = query(
      collection(database, collections.missionNews),
      orderBy("createdAt", "desc"),
      limit(5),
    );
  }

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getMissionNewsListCount = async () => {
  const q = query(collection(database, collections.missionNews));
  const snapshot = await getCountFromServer(q);

  return snapshot;
};

export const postMissionNews = async (missionNews: IMissionNewsForm) => {
  const docRef = await addDoc(collection(database, collections.missionNews), missionNews);
  return docRef;
};

export const getMissionNews = async (missionNewsId: string) => {
  const docRef = doc(database, collections.missionNews, missionNewsId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const deleteMissionNews = async (missionNewsId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.missionNews, missionNewsId));

  return snapshot;
};

export const putMissionNews = async (
  changedMissionNews: Omit<IMissionNewsForm, "createdAt" | "image"> & {
    id: string;
    image?: string;
  },
) => {
  const docRef = doc(database, collections.missionNews, changedMissionNews.id);
  const snapshot = await updateDoc(docRef, changedMissionNews);
  return snapshot;
};
