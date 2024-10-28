export const missionNewsListKeys = {
  all: ["missionNewsList"],
  list: () => [...missionNewsListKeys.all, "list"],
  detail: (id: string) => [...missionNewsListKeys.all, "detail", id],
};
