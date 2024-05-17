import { postSignUp } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "firebase";

export const usePostLogin = () => useMutation({ mutationFn: postLogin });

export const usePostSignUp = () => useMutation({ mutationFn: postSignUp });
