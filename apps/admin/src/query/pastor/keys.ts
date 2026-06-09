export const pastorKeys = {
  all: ["pastor"],
  books: (page?: number) => [...pastorKeys.all, "books", page],
  profile: () => [...pastorKeys.all, "profile"],
};
