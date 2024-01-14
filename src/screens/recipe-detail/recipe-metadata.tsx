import { twMerge } from "tailwind-merge";
import { Recipe } from "../../api";
import { Container } from "../../components/ui/container";

interface RecipeMetadataItemProps {
  title: string;
  value: string | number;
  hasGradientText?: boolean;
}

function RecipeMetadataItem({
  title,
  value,
  hasGradientText = false,
}: RecipeMetadataItemProps) {
  return (
    <div className="text-left">
      <div className="font-[400] text-slate-500 text-[13px]">{title}</div>
      <div
        className={twMerge(
          "text-base font-semibold",
          hasGradientText &&
            "bg-gradient-to-r from-[#FFBF43] to-[#FF4869] inline-block text-transparent bg-clip-text"
        )}
      >
        {value}
      </div>
    </div>
  );
}

type RecipeMetadataProps = Pick<
  Recipe,
  | "protein"
  | "spice"
  | "serves"
  | "cookingOil"
  | "volume"
  | "stock"
  | "authenticity"
  | "produce"
>;

export function RecipeMetadata(props: RecipeMetadataProps) {
  const {
    protein,
    spice,
    serves,
    cookingOil,
    volume,
    stock,
    authenticity,
    produce,
  } = props;

  return (
    <Container className="bg-slate-800 px-6 py-3 rounded-md">
      <div className="grid grid-cols-2 gap-x-5 gap-y-3">
        <RecipeMetadataItem title={"Protein"} value={protein} />
        <RecipeMetadataItem title={"Produce"} value={produce} />
        <RecipeMetadataItem title={"Spices"} value={spice} hasGradientText />
        <RecipeMetadataItem
          title={"Cooking Oil"}
          value={cookingOil}
          hasGradientText
        />
        <RecipeMetadataItem title={"Volume/Weight"} value={volume} />
        <RecipeMetadataItem title={"Serves"} value={serves} />
        <RecipeMetadataItem
          title={"Authenticity"}
          value={authenticity}
          hasGradientText
        />
        <RecipeMetadataItem title={"Stock"} value={stock} hasGradientText />
      </div>
    </Container>
  );
}
