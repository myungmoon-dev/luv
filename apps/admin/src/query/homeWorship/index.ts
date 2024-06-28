import { postHomeWorship } from "@/api/homeWorship";
import { useMutation } from "@tanstack/react-query";

const usePostHomeWorship = () =>
  useMutation({
    mutationFn: postHomeWorship,
  });

export { usePostHomeWorship };
