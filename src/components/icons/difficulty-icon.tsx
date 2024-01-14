type DifficultyIconProps = {
  difficulty: number;
};

export const DifficultyIcon = ({ difficulty }: DifficultyIconProps) => {
  const getIconColorBasedOnDifficulty = (difficulty: number) => {
    if (difficulty >= 3) {
      return "#FF003D";
    }

    if (difficulty >= 2) {
      return "#F63B00";
    }

    return "#00FF00";
  };

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12V0H12V5.5L5.5 12H0Z"
        fill={getIconColorBasedOnDifficulty(difficulty)}
      />
    </svg>
  );
};
