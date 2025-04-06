const homeWorshipKeys = {
  all: ["homeWorship"],
  list: (page: number, size: number) => [...homeWorshipKeys.all, "list", page, size],
  detail: (homeWorshipId: string) => [...homeWorshipKeys.all, "detail", homeWorshipId],
};

export default homeWorshipKeys;
