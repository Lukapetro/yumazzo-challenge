import { Combobox, Transition } from "@headlessui/react";
import { FlagIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { Recipe } from "../../api";
import { DifficultyIcon } from "../../components/icons/difficulty-icon";
import { useRecipeStore } from "../../stores/recipe-store";
import { getDifficultyWordFromNumber } from "../../utils/get-difficulty-word-from-number";

type SearchProps = {
  recipes: Recipe[];
};

export function RecipeSearch({ recipes }: SearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { selectedRecipe, setSelectedRecipe } = useRecipeStore(
    (state) => state
  );

  const filteredRecipes = useMemo(() => {
    if (!query) {
      return [];
    }

    return recipes
      .filter((recipe) =>
        recipe.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      )
      .slice(0, 3);
  }, [recipes, query]);

  const handleSelect = useCallback(
    (recipe: Recipe) => {
      setSelectedRecipe(recipe);
      setQuery("");
      if (inputRef.current) {
        inputRef.current.blur();
      }
    },
    [setSelectedRecipe]
  );

  return (
    <Combobox value={selectedRecipe} onChange={handleSelect}>
      <div className="relative mb-6">
        <div className="relative w-full cursor-default overflow-hidden rounded-md text-left ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <Combobox.Input
            ref={inputRef}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cuisine"
            className="rounded-md w-full border-0 py-1.5 pl-10 bg-[#131823] text-white ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-purple-400"
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#121826] py-1 shadow-lg focus:outline-none">
            {filteredRecipes.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-white">
                Nothing found.
              </div>
            ) : (
              filteredRecipes.map((recipe, index) => (
                <Combobox.Option
                  key={recipe.name + index}
                  className={({ active }) =>
                    `relative cursor-default select-none p-2 pr-4 flex items-center justify-between ${
                      active ? "bg-slate-800" : ""
                    }`
                  }
                  value={recipe}
                >
                  <div className="flex space-x-2">
                    {/* Flag icon is a placeholder for real flag, but we dont have that prop on the recipe */}
                    <FlagIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className={"block truncate text-base"}>
                      {recipe.name}
                    </span>
                  </div>

                  <div className="space-x-2.5 flex divide-slate-700">
                    <div className="flex items-center space-x-2.5">
                      <DifficultyIcon difficulty={recipe.difficulty} />
                      <div className="font-semibold">
                        {getDifficultyWordFromNumber(recipe.difficulty)}
                      </div>
                    </div>

                    <div className="border-l border-slate-700" />
                    <div className="text-slate-400">35min</div>
                  </div>
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
