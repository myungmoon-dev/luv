import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { collections, database } from ".";

export const postUser = async ({ user, name, phone }: { user: User; name: string; phone: string }) => {
  const docRef = await addDoc(collection(database, collections.user), { email: user.email, id: user.uid, name, phone });
  return docRef;
};
