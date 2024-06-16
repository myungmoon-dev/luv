import { IBulletinForm } from "type";

import { addDoc, collection, getDocs, orderBy, query, limit, doc, getDoc, deleteDoc } from "firebase/firestore";
import { database, collections } from ".";

export const getBulletins = async () => {
  const getQuery = query(collection(database, collections.bulletin), orderBy("date", "desc"), limit(4));

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getBulletin = async (bulletinId: string) => {
  const docRef = doc(database, collections.bulletin, bulletinId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const postBulletin = async (bulletin: IBulletinForm) => {
  const docRef = await addDoc(collection(database, collections.bulletin), bulletin);
  return docRef;
};

export const deleteBulletin = async (bulletinId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.bulletin, bulletinId));

  return snapshot;
};
