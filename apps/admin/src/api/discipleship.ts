import { IBibleForm } from "type";
import { api } from ".";

export const postBible = async (bible: IBibleForm) => {
  const { data } = await api.post("/api/discipleship/bibles", bible);

  return data;
};
