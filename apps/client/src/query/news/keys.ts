const newsKeys = {
  all: ["news"],
  missionList: (page: number, size: number, location?: string) => [
    ...newsKeys.all,
    "missionList",
    page,
    size,
    location,
  ],
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
