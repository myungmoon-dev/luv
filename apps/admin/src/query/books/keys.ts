export const booksKeys = {
  all: ["books"],
  list: () => [...booksKeys.all, "list"],
  detail: (id: string) => [...booksKeys.all, "detail", id],
};
