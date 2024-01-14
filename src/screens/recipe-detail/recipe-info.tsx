import { PaellaIcon } from "../../components/icons/paella-icon";
import { Container } from "../../components/ui/container";
import { getDifficultyWordFromNumber } from "../../utils/get-difficulty-word-from-number";

type RecipeInfoProps = {
  difficulty: number;
  description: string;
};

const difficultyColors: { [key: number]: string } = {
  1: "bg-teal-400 text-neutral-900",
  2: "bg-pink-600 text-white",
  3: "bg-[#41479B] text-white",
};

export function RecipeInfo({ difficulty, description }: RecipeInfoProps) {
  const bgColorClass =
    difficultyColors[difficulty] || "bg-teal-400 text-neutral-900";

  return (
    <Container>
      <div className={`${bgColorClass} px-5 py-2.5 rounded-md space-y-4`}>
        <div className="flex space-x-3">
          <PaellaIcon />
          <h1 className="font-bold text-lg">
            Difficulty: {getDifficultyWordFromNumber(difficulty)}
          </h1>
        </div>
        <p className="text-left">{description}</p>
      </div>
    </Container>
  );
}
