import {
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  getFirestore,
  where,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { firebase } from "../../firebase";
import { AlbumType } from "type";
import { collections } from ".";

const database = getFirestore(firebase);

export interface IGetAlbumListProps {
  albumType: AlbumType;
  albumCount?: number;
}

interface IAlbumForm {
  title: string;
  albumType: string;
  images: string[];
}

export const getAlbum = async ({
  albumType,
  albumCount,
}: IGetAlbumListProps) => {
  const albumRef = collection(database, collections.album);
  let getQuery;

  if (albumType === "all") {
    getQuery = query(
      albumRef,
      orderBy("createdAt", "desc"),
      limit(albumCount ?? 20)
    );
  } else {
    getQuery = query(
      albumRef,
      where("albumType", "==", albumType),
      orderBy("createdAt", "desc"),
      limit(albumCount ?? 20)
    );
  }

  const albumList = await getDocs(getQuery);

  return albumList;
};

export const postAlbum = async (album: IAlbumForm) => {
  const docRef = await addDoc(collection(database, collections.album), {
    ...album,
    createdAt: Date.now(),
  });
  return docRef;
};
export const deleteAlbum = async (albumId: string) => {
  const snapshot = await deleteDoc(doc(database, collections.album, albumId));
  return snapshot;
};
