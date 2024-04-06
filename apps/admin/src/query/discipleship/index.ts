import { postBible } from "@/api/discipleship";
import { useMutation } from "@tanstack/react-query";

export const usePostBible = () => useMutation({ mutationFn: postBible });
