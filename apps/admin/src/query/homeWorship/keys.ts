const homewWorshipKeys = {
  all: ["homeWorship"],
  list: (page?: number) => [...homewWorshipKeys.all, "list", page],
};

export default homewWorshipKeys;
