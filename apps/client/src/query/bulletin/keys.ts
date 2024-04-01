const bulletinKeys = {
  all: ["bulletin"],
  list: () => [...bulletinKeys.all, "list"],
  detail: (bulletinId: string) => [...bulletinKeys.all, "detail", bulletinId],
};

export default bulletinKeys;
