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
} from "firebase/firestore";
import { collections, database } from ".";
import { IBookForm } from "type";

export const getBooks = async ({ lastVisibleCreatedAt }: { lastVisibleCreatedAt?: string }) => {
  let getQuery;

  if (lastVisibleCreatedAt) {
    getQuery = query(
      collection(database, collections.books),
      orderBy("createdAt", "desc"),
      limit(5),
      startAfter(Number(lastVisibleCreatedAt)),
    );
  } else {
    getQuery = query(
      collection(database, collections.books),
      orderBy("createdAt", "desc"),
      limit(5),
    );
  }

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getBooksCount = async () => {
  const q = query(collection(database, collections.books));
  const snapshot = await getCountFromServer(q);

  return snapshot;
};

export const postBook = async (book: IBookForm) => {
  const docRef = await addDoc(collection(database, collections.books), book);
  return docRef;
};

export const getBook = async (bookId: string) => {
  const docRef = doc(database, collections.books, bookId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const deleteBook = async (bookId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.books, bookId));

  return snapshot;
};
