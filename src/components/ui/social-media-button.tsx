import { ReactElement } from "react";

interface SocialMediaButtonProps {
  icon: ReactElement;
  onClick: () => void;
}

// Individual buttons for sharing on Twitter, etc.
export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-1 focus:outline-none focus:ring-slate-600 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
    >
      {icon}
    </button>
  );
};
