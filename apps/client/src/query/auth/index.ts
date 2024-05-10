import { getUser, postLogin, postSignUp } from "@/api/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import authKeys from "./keys";

export const useGetMe = () =>
  useQuery({
    queryKey: authKeys.me(),
    queryFn: () => getUser(),
  });

export const usePostLogin = () => useMutation({ mutationFn: postLogin });

export const usePostSignUp = () => useMutation({ mutationFn: postSignUp });
