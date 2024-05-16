import useAuthStore from "@/store/auth";
import { auth, onAuthStateChanged } from "firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IUseAuthProps {
  mustLogin: boolean;
}

const useAuth = ({ mustLogin }: IUseAuthProps) => {
  const { push } = useRouter();
  const [setUid, setEmail] = useAuthStore((state) => [state.setUid, state.setEmail]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email);
      } else {
        if (mustLogin) {
          alert("로그인이 필요합니다.");
          push("/login");
        }
      }
    });
  }, []);

  return {};
};

export default useAuth;
