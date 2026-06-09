export const homeKeys = {
  all: ["home"],
  youtube: () => [...homeKeys.all, "youtube"],
  images: (page?: number) => [...homeKeys.all, "images", page],
};
