import { addDoc, collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { IHomeWorshipForm } from "type/src/homeWorship";
import { collections, database } from ".";

export const getHomeWorships = async () => {
  const getQuery = query(collection(database, collections.homeWorship), orderBy("createdAt", "desc"));

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getHomeWorship = async (homeWorshipId: string) => {
  const docRef = doc(database, collections.homeWorship, homeWorshipId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const postHomeWorship = async (
  homeWorship: Omit<IHomeWorshipForm, "content"> & { content: string; createdAt: number }
) => {
  const docRef = await addDoc(collection(database, collections.homeWorship), homeWorship);
  return docRef;
};