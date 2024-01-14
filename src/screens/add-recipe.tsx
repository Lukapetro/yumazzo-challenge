import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
//import useWindowSize from "react-use/lib/useWindowSize";
import JSConfetti from "js-confetti";
import { useMemo } from "react";
import * as z from "zod";
import { useCreateRecipe } from "../api";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { useNavigationStore } from "../stores/navigation-store";
import { useRecipeStore } from "../stores/recipe-store";
import COUNTRIES_DATA from "../utils/countries.json";

const difficultySchema = z.union([z.literal(1), z.literal(2), z.literal(3)]);
const authenticitySchema = z.enum(["Authentic", "Not Authentic"]);

const schema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  origin: z
    .string()
    .min(1, {
      message: "Origin is required",
    })
    .max(2, { message: "Origin must be at most 2 characters" }),
  description: z
    .string()
    .min(1, {
      message: "Description is required",
    })
    .max(200, {
      message: "Description must be less than 200 characters",
    }),
  difficulty: difficultySchema,
  protein: z.string().min(1, {
    message: "Protein is required",
  }),
  produce: z.string().min(1, {
    message: "Produce is required",
  }),
  spice: z.string().min(1, {
    message: "Spice is required",
  }),
  cookingOil: z.string(),
  volume: z.number().min(1, {
    message: "Volume is required",
  }),
  serves: z.number().min(1, {
    message: "Serves is required",
  }),
  authenticity: authenticitySchema,
  stock: z.string().min(1, {
    message: "Stock is required",
  }),
});

type FormType = z.infer<typeof schema>;

const difficultyOptions = [
  { value: 1, label: "Easy" },
  { value: 2, label: "Medium" },
  { value: 3, label: "Hard" },
];

const authenticityOptions = [
  { value: "Authentic", label: "Authentic" },
  { value: "Not Authentic", label: "Not Authentic" },
];

export const AddRecipe = () => {
  const navigate = useNavigationStore((state) => state.navigate);
  const { setSelectedRecipe } = useRecipeStore();
  const jsConfetti = new JSConfetti();

  const countryOptions = useMemo(() => {
    return COUNTRIES_DATA.filter((country) => country.code).map((country) => ({
      value: country.code as string,
      label: country.name,
    }));
  }, []);

  const {
    mutate: createRecipe,
    isPending,
    isError,
    error,
  } = useCreateRecipe({
    onSuccess: (_, variables) => {
      navigate("RecipeDetail");
      setSelectedRecipe(variables);
      jsConfetti.addConfetti();
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      origin: "",
      description: "",
      protein: "",
      produce: "",
      spice: "",
      cookingOil: "",
      volume: 0,
      serves: 0,
      stock: "",
      difficulty: 1,
      authenticity: "Authentic",
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    createRecipe(data);
  };

  return (
    <div className="flex-1 justify-center">
      <div className="flex items-center space-x-2.5 border-b border-slate-700 pb-4 mb-6">
        <ChevronLeftIcon
          onClick={() => navigate("RecipeDetail")}
          className="h-6 w-6 text-slate-400"
        />
        <div className="text-lg font-bold">Add new recipe</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex space-x-3">
          <Input
            control={control}
            name="name"
            label="Name"
            error={errors.name?.message}
          />

          <Select
            name="origin"
            label="Origin"
            options={countryOptions}
            error={errors.origin?.message}
            control={control}
          />
        </div>

        <div>
          <Textarea
            control={control}
            name="description"
            label="Description"
            error={errors.description?.message}
            placeholder="Describe your recipe..."
            rows={3}
            maxLength={200}
          />
        </div>

        <div className="flex space-x-3">
          <Select
            name="difficulty"
            label="Difficulty"
            options={difficultyOptions}
            error={errors.difficulty?.message}
            control={control}
          />
          <Input
            control={control}
            name="protein"
            label="Protein"
            error={errors.protein?.message}
          />
        </div>

        <div className="flex space-x-3">
          <Input
            control={control}
            name="produce"
            label="Produce"
            error={errors.produce?.message}
          />
          <Input
            control={control}
            name="spice"
            label="Spice"
            error={errors.spice?.message}
          />
        </div>

        <div className="flex space-x-3">
          <Input
            control={control}
            name="cookingOil"
            label="Cooking Oil?"
            error={errors.cookingOil?.message}
          />
          <Input
            control={control}
            name="volume"
            label="Volume"
            error={errors.volume?.message}
            trailingAddon={<div className="text-slate-300 font-300">grams</div>}
            type="number"
          />
        </div>

        <div className="flex space-x-3">
          <Input
            control={control}
            name="serves"
            label="Serves"
            error={errors.serves?.message}
            trailingAddon={
              <div className="text-slate-300 font-300">people</div>
            }
            type="number"
          />
          <Select
            name="authenticity"
            label="Authenticity"
            options={authenticityOptions}
            error={errors.authenticity?.message}
            control={control}
          />
        </div>

        <div className="flex ">
          <Input
            control={control}
            name="stock"
            label="stock"
            error={errors.stock?.message}
          />
        </div>

        {isError && <p>Error: {error?.message || "An error occurred"}</p>}

        <button
          className="bg-[#764AF4] rounded-md py-2 w-full text-base"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Add Recipe"}
        </button>
      </form>
    </div>
  );
};
