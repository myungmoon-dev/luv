const homewWorshipKeys = {
  all: ["homeWorship"],
  list: (page?: number) => [...homewWorshipKeys.all, "list", page],
  detail: (id: string) => [...homewWorshipKeys.all, "detail", id],
};

export default homewWorshipKeys;
