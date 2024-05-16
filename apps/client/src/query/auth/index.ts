import { postSignUp } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const usePostSignUp = () => useMutation({ mutationFn: postSignUp });
