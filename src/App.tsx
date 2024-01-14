import { AppContainer } from "./components/ui/app-container";
import { AddRecipe } from "./screens/add-recipe";
import { RecipeDetail } from "./screens/recipe-detail/recipe-detail";
import { useNavigationStore } from "./stores/navigation-store";

function App() {
  const currentRoute = useNavigationStore((state) => state.currentRoute);

  return (
    <AppContainer>
      {currentRoute === "RecipeDetail" && <RecipeDetail />}
      {currentRoute === "AddRecipe" && <AddRecipe />}
    </AppContainer>
  );
}

export default App;
