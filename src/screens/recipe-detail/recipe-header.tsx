import { FlagIcon } from "@heroicons/react/16/solid";
import { DiscordIcon } from "../../components/icons/discord-icon";
import { TelegramIcon } from "../../components/icons/telegram-icon";
import { TwitterIcon } from "../../components/icons/twitter-icon";
import { SocialMediaButton } from "../../components/ui/social-media-button";
import { SharePlatform, useShare } from "../../hooks/useShare";
import { useNavigationStore } from "../../stores/navigation-store";
import COUNTRIES_DATA from "../../utils/countries.json";

type RecipeHeaderProps = {
  recipeName: string;
  countryCode: string;
};

const FAKE_URL = "https://rug.ai";

export function RecipeHeader({ recipeName, countryCode }: RecipeHeaderProps) {
  const navigate = useNavigationStore((state) => state.navigate);
  const shareOnTwitter = useShare(recipeName, FAKE_URL, SharePlatform.Twitter);
  const shareOnTelegram = useShare(
    recipeName,
    FAKE_URL,
    SharePlatform.Telegram
  );
  const shareOnDiscord = useShare(recipeName, FAKE_URL, SharePlatform.Discord);

  const country = COUNTRIES_DATA.find(
    (country) => country.code === countryCode.toLowerCase()
  );

  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2.5">
        {country ? (
          <img
            src={country.flag}
            alt={`${country.name} Flag`}
            className="h-5 w-5"
          />
        ) : (
          <FlagIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        )}
        <div className="text-[14px]">{recipeName}</div>
      </div>

      <div className="flex space-x-1">
        <SocialMediaButton icon={<TwitterIcon />} onClick={shareOnTwitter} />
        <SocialMediaButton icon={<TelegramIcon />} onClick={shareOnTelegram} />
        <SocialMediaButton icon={<DiscordIcon />} onClick={shareOnDiscord} />
        <button
          type="button"
          onClick={() => navigate("AddRecipe")}
          className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-600 rounded-md text-[13px] px-2 py-0.5 text-center inline-flex items-center me-2"
        >
          + Add recipe
        </button>
      </div>
    </div>
  );
}
