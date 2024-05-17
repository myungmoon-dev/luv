const homeWorshipKeys = {
  all: ["homeWorship"],
  list: () => [...homeWorshipKeys.all, "list"],
  detail: (homeWorshipId: string) => [...homeWorshipKeys.all, "detail", homeWorshipId],
};

export default homeWorshipKeys;
