import { User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { collections, database } from ".";

export const postUser = async ({
  user,
  name,
  phone,
}: {
  user: User;
  name: string;
  phone: string;
}) => {
  const docRef = await addDoc(collection(database, collections.user), {
    email: user.email,
    id: user.uid,
    name,
    phone,
  });
  return docRef;
};

export const getUser = async ({ userId }: { userId: string }) => {
  const docRef = await getDocs(
    query(collection(database, collections.user), where("id", "==", userId)),
  );
  return docRef;
};
