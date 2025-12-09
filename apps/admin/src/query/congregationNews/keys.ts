export const congregationNewsKeys = {
  all: ["congregationNews"],
  list: (params?: { page?: number; size?: number; type?: string }) => [...congregationNewsKeys.all, "list", params],
  detail: (id: string) => [...congregationNewsKeys.all, "detail", id],
};

