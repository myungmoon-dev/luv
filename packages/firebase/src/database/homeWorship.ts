import {
  addDoc,
  arrayRemove,
  arrayUnion,
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
  where,
} from "firebase/firestore";
import { IComment } from "type";
import { IHomeWorshipForm } from "type/src/homeWorship";
import { collections, database } from ".";

export const getHomeWorships = async ({
  lastVisibleCreatedAt,
}: {
  lastVisibleCreatedAt?: string;
}) => {
  let getQuery;

  if (lastVisibleCreatedAt) {
    getQuery = query(
      collection(database, collections.homeWorship),
      where("isPinned", "!=", true),
      orderBy("createdAt", "desc"),
      limit(10),
      startAfter(Number(lastVisibleCreatedAt)),
    );
  } else {
    getQuery = query(
      collection(database, collections.homeWorship),
      where("isPinned", "!=", true),
      orderBy("createdAt", "desc"),
      limit(10),
    );
  }

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getHomeWorshipsCount = async () => {
  const q = query(collection(database, collections.homeWorship), where("isPinned", "!=", true));
  const snapshot = await getCountFromServer(q);

  return snapshot;
};

export const getPinnedHomeWorshipsCount = async () => {
  const q = query(collection(database, collections.homeWorship), where("isPinned", "==", true));
  const snapshot = await getCountFromServer(q);

  return snapshot;
};

export const getPinnedHomeWorships = async () => {
  const getQuery = query(
    collection(database, collections.homeWorship),
    where("isPinned", "==", true),
    orderBy("date", "desc"),
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
  homeWorship: Omit<IHomeWorshipForm, "image" | "video"> & {
    image: string | null;
    createdAt: number;
    video: string | null;
  },
) => {
  const docRef = await addDoc(collection(database, collections.homeWorship), homeWorship);
  return docRef;
};

export const putHomeWorship = async (
  changedHomeworship: Omit<IHomeWorshipForm, "image"> & {
    image: string;
    createdAt: number;
    id: string;
  },
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
