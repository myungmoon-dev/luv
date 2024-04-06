const bibleKeys = {
  all: ["bible"],
  list: () => [...bibleKeys.all, "list"],
  detail: (bibleId: string) => [...bibleKeys.all, "detail", bibleId],
};

export default bibleKeys;
