const bulletinKeys = {
  all: ["bulletin"],
  list: (page?: number) => [...bulletinKeys.all, "list", page],
  detail: (bulletinId: string) => [...bulletinKeys.all, "detail", bulletinId],
};

export default bulletinKeys;
