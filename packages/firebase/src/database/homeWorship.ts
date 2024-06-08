import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { IHomeWorshipForm } from "type/src/homeWorship";
import { collections, database } from ".";
import { IComment } from "type";

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

export const putHomeWorship = async (
  changedHomeworship: Omit<IHomeWorshipForm, "image"> & { image: string; createdAt: number; id: string }
) => {
  const docRef = doc(database, collections.homeWorship, changedHomeworship.id);

  const snapshot = await updateDoc(docRef, changedHomeworship);
  return snapshot;
};

export const deleteHomeWorship = async (homeWorshipId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.homeWorship, homeWorshipId));

  return snapshot;
};

export const postHomeWorshipComment = async ({
  homeWorshipId,
  comment,
}: {
  homeWorshipId: string;
  comment: IComment;
}) => {
  const docRef = doc(database, collections.homeWorship, homeWorshipId);

  const snapshot = await updateDoc(docRef, {
    comments: arrayUnion(comment),
  });

  return snapshot;
};

export const deleteHomeWorshipComment = async ({
  comment,
  homeWorshipId,
}: {
  homeWorshipId: string;
  comment: IComment;
}) => {
  const docRef = doc(database, collections.homeWorship, homeWorshipId);

  const snapshot = await updateDoc(docRef, {
    comments: arrayRemove(comment),
  });

  return snapshot;
};
