import { useRecipes } from "../../api";
import { AppContainer } from "../../components/ui/app-container";
import { useRecipeStore } from "../../stores/recipe-store";
import { RecipeCard } from "./recipe-card";
import { RecipeSearch } from "./recipe-search";

export function RecipeDetail() {
  const { data: recipes, isLoading, isError } = useRecipes();
  const { selectedRecipe } = useRecipeStore((state) => state);

  if (isLoading) {
    return <AppContainer>Loading...</AppContainer>;
  }

  if (isError || !recipes) {
    return (
      <AppContainer>Unable to load recipe. Please try again later</AppContainer>
    );
  }

  return (
    <>
      <RecipeSearch recipes={recipes} />
      <RecipeCard recipe={selectedRecipe ?? recipes[0]} />
    </>
  );
}
