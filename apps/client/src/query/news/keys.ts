const newsKeys = {
  all: ["news"],
  missionList: (page: number, size: number) => [...newsKeys.all, "missionList", page, size],
  missionDetail: (missionId: string) => [...newsKeys.all, "missionDetail", missionId],
};

export default newsKeys;
