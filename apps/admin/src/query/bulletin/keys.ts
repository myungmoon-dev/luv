const bulletinKeys = {
  all: ["bulletin"],
  list: (page?: number, year?: string, month?: string) => [...bulletinKeys.all, "list", page, year, month],
  detail: (bulletinId: string) => [...bulletinKeys.all, "detail", bulletinId],
  dates: () => [...bulletinKeys.all, "dates"],
};

export default bulletinKeys;
