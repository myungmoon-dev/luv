import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase);

// FIXME: test
export const getTest = () => {
  return auth.name;
};
