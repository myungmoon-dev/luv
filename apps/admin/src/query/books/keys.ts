export const booksKeys = {
  all: ["books"],
  list: (page?: number) => [...booksKeys.all, "list", page],
  detail: (id: string) => [...booksKeys.all, "detail", id],
};
