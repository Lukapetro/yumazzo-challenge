import { create } from "zustand";

export type AvailableRoutes = "RecipeDetail" | "AddRecipe";

interface NavigationState {
  currentRoute: AvailableRoutes;
  navigate: (route: AvailableRoutes) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentRoute: "RecipeDetail",
  navigate: (route) => set({ currentRoute: route }),
}));
