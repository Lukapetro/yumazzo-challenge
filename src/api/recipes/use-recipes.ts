import type { AxiosError } from "axios";
import { createQuery } from "react-query-kit";

import { client } from "../common";
import type { Recipe } from "./types";

type Response = Recipe[];
type Variables = void;

export const useRecipes = createQuery<Response, Variables, AxiosError>({
  queryKey: ["recipes"],
  fetcher: async () => {
    const response = await client.get(`/recipes`);
    return response.data.message;
  },
});
