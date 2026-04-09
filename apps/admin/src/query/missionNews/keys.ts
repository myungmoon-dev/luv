export const missionNewsListKeys = {
  all: ["missionNewsList"],
  list: (page?: number, location?: string) => [...missionNewsListKeys.all, "list", page, location],
  detail: (id: string) => [...missionNewsListKeys.all, "detail", id],
};
