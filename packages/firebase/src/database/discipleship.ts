import { IBibleForm, YearMonthType } from "type";

import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  getDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
import { database, collections } from ".";

export const getBibles = async ({ yearMonth }: { yearMonth: YearMonthType }) => {
  const startDate = `${yearMonth}-01`;
  const endDate = `${yearMonth}-31`;

  const getQuery = query(
    collection(database, collections.bible),
    orderBy("date", "desc"),
    where("date", ">=", startDate),
    where("date", "<=", endDate),
  );

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getBible = async (bibleId: string) => {
  const docRef = doc(database, collections.bible, bibleId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const postBible = async (bible: IBibleForm) => {
  const docRef = await addDoc(collection(database, collections.bible), bible);
  return docRef;
};

export const deleteBible = async (bibleId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.bible, bibleId));

  return snapshot;
};
