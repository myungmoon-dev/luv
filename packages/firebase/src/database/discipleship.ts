import { IBibleForm } from "type";

import { addDoc, collection, getDocs, orderBy, query, doc, getDoc } from "firebase/firestore";
import { database, collections } from ".";

export const getBibles = async () => {
  const getQuery = query(collection(database, collections.bible), orderBy("date", "desc"));

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
