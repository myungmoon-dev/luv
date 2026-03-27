export const missionNewsListKeys = {
  all: ["missionNewsList"],
  list: (page?: number) => [...missionNewsListKeys.all, "list", page],
  detail: (id: string) => [...missionNewsListKeys.all, "detail", id],
};
