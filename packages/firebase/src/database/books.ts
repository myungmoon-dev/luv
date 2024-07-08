import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { collections, database } from ".";
import { IBookForm } from "type";

export const getBooks = async () => {
  const getQuery = query(collection(database, collections.books), orderBy("date", "desc"));
  const snapshot = await getDocs(getQuery);
  return snapshot;
};

export const postBook = async (book: IBookForm) => {
  const docRef = await addDoc(collection(database, collections.books), book);
  return docRef;
};
