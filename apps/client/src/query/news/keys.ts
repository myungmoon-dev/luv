const newsKeys = {
  all: ["news"],
  missionList: () => [...newsKeys.all, "missionList"],
  missionDetail: (missionId: string) => [...newsKeys.all, "missionDetail", missionId],
};

export default newsKeys;
