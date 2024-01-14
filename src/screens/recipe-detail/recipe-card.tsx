import { Recipe } from "../../api";

import { RecipeInfo } from "../../screens/recipe-detail/recipe-info";
import { RecipeMetadata } from "../../screens/recipe-detail/recipe-metadata";
import { RecipeHeader } from "./recipe-header";

type RecipeCardProps = {
  recipe: Recipe;
};

// Represents the main card containing the recipe information.
export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="space-y-6">
      <RecipeHeader recipeName={recipe.name} countryCode={recipe.origin} />
      <RecipeInfo
        difficulty={recipe.difficulty}
        description={recipe.description}
      />
      <RecipeMetadata
        protein={recipe.protein}
        spice={recipe.spice}
        serves={recipe.serves}
        cookingOil={recipe.cookingOil}
        volume={recipe.volume}
        stock={recipe.stock}
        authenticity={recipe.authenticity}
        produce={recipe.produce}
      />
    </div>
  );
}
