import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { IHomeWorshipForm } from "type/src/homeWorship";
import { collections, database } from ".";

export const getHomeWorships = async () => {
  const getQuery = query(
    collection(database, collections.homeWorship),
    where("isPinned", "!=", true),
    orderBy("date", "desc")
  );

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getPinnedHomeWorships = async () => {
  const getQuery = query(
    collection(database, collections.homeWorship),
    where("isPinned", "==", true),
    orderBy("date", "desc")
  );

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getHomeWorship = async (homeWorshipId: string) => {
  const docRef = doc(database, collections.homeWorship, homeWorshipId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const postHomeWorship = async (
  homeWorship: Omit<IHomeWorshipForm, "image"> & { image: string; createdAt: number }
) => {
  const docRef = await addDoc(collection(database, collections.homeWorship), homeWorship);
  return docRef;
};

export const deleteHomeWorship = async (homeWorshipId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.homeWorship, homeWorshipId));

  return snapshot;
};
