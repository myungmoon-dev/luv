import { IBulletinForm } from "type";

import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { database, collections } from ".";

export const getBulletins = async () => {
  const getQuery = query(collection(database, collections.bulletin));

  const liveLink = await getDocs(getQuery);

  return liveLink;
};

export const postBulletin = async (bulletin: IBulletinForm) => {
  const docRef = await addDoc(
    collection(database, collections.bulletin),
    bulletin
  );
  return docRef;
};
