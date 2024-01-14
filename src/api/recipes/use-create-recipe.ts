import type { AxiosError } from "axios";
import { createMutation } from "react-query-kit";

import { Recipe } from ".";
import { client } from "../common";

type Variables = Recipe;
type Response = Recipe;

export const useCreateRecipe = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    client({
      url: "recipes",
      method: "POST",
      data: variables,
    }).then((response) => response.data),
});
