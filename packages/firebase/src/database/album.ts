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
  date: string;
}

interface IcreateAlbumQueryProps {
  albumType: AlbumType;
  albumCount?: number;
}

const createAlbumQuery = ({
  albumType,
  albumCount,
}: IcreateAlbumQueryProps) => {
  const albumRef = collection(database, collections.album);

  if (albumType === "all") {
    return query(
      albumRef,
      orderBy("createdAt", "desc"),
      limit(albumCount ?? 20)
    );
  } else {
    return query(
      albumRef,
      where("albumType", "==", albumType),
      orderBy("createdAt", "desc"),
      limit(albumCount ?? 20)
    );
  }
};

export const getAlbum = async ({
  albumType,
  albumCount,
}: IGetAlbumListProps) => {
  const getQuery = createAlbumQuery({ albumType, albumCount });
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
