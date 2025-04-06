const bulletinKeys = {
  all: ["bulletin"],
  list: (page: number, size: number) => [...bulletinKeys.all, "list", page, size],
  detail: (bulletinId: string) => [...bulletinKeys.all, "detail", bulletinId],
};

export default bulletinKeys;
