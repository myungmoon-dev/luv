import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { collections, database } from ".";
import { IMissionForm } from "type";

export const getMissions = async () => {
  const getQuery = query(collection(database, collections.mission), orderBy("date", "desc"));

  const snapshot = await getDocs(getQuery);

  return snapshot;
};

export const getMission = async (missionId: string) => {
  const docRef = doc(database, collections.mission, missionId);

  const snapshot = await getDoc(docRef);

  return snapshot;
};

export const postMission = async (mission: Omit<IMissionForm, "image"> & { image: string; createdAt: number }) => {
  const docRef = await addDoc(collection(database, collections.mission), mission);
  return docRef;
};

export const deleteMission = async (missionId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.mission, missionId));

  return snapshot;
};
