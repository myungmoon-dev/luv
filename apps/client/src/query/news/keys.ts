const newsKeys = {
  all: ["news"],
  missionList: (page: number, size: number) => [...newsKeys.all, "missionList", page, size],
  missionDetail: (missionId: string) => [...newsKeys.all, "missionDetail", missionId],
  congregationNewsList: (page: number, size: number, type?: string) => [
    ...newsKeys.all,
    "congregationNewsList",
    page,
    size,
    type,
  ],
};

export default newsKeys;
