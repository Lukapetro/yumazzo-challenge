import { create } from "zustand";
import { Recipe } from "../api";

interface RecipeState {
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (recipe: Recipe) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
}));
