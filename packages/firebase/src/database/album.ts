import {
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  getFirestore,
  where,
  addDoc,
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
  // 가장 큰 idx 값을 가져오기 위한 쿼리
  let maxIdx = 0;
  const querySnapshot = await getDocs(
    query(
      collection(database, collections.album),
      orderBy("idx", "desc"),
      limit(1)
    )
  );
  const data = querySnapshot.docs[0]?.data();
  if (data) maxIdx = data.idx;
  const newIdx = maxIdx + 1;

  const docRef = await addDoc(collection(database, collections.album), {
    ...album,
    createdAt: Date.now(),
    idx: newIdx,
  });
  return docRef;
};
