import { firebase } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const storage = getStorage(firebase);
export const getBulletin = () => {};
export const createBulletin = () => {};

interface IProps {
  file: File;
}

export const uploadImg = async ({ file }: IProps) => {
  const locationRef = ref(storage, "test/images");

  const result = await uploadBytes(locationRef, file);
  const url = await getDownloadURL(result.ref);
  return url;
};
