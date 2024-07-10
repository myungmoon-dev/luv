export const booksKeys = {
  all: ["books"],
  list: () => [...booksKeys.all, "list"],
  detail: (bookId: string) => [...booksKeys.all, "detail", bookId],
};
