import { useCallback } from "react";

export enum SharePlatform {
  Twitter = "Twitter",
  Telegram = "Telegram",
  Discord = "Discord",
}

/**
 * Custom hook to share a recipe on a selected platform.
 * @param {string} recipeName - Name of the recipe to share.
 * @param {string} url - URL of the recipe page.
 * @param {SharePlatform} platform - Platform to share the recipe on.
 * @returns {Function} - Function to trigger sharing on the selected platform.
 */
export const useShare = (
  recipeName: string,
  url: string,
  platform: SharePlatform
): (() => void) => {
  const share = useCallback(() => {
    const text = encodeURIComponent(`Check out this recipe: ${recipeName}`);
    let shareUrl = "";

    switch (platform) {
      case SharePlatform.Twitter:
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(
          url
        )}`;
        break;
      case SharePlatform.Telegram:
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
          url
        )}&text=${text}`;
        break;
      case SharePlatform.Discord:
        shareUrl = `https://discord.com/channels/@me?message=${text} ${encodeURIComponent(
          url
        )}`;
        break;
    }

    window.open(shareUrl, "_blank");
  }, [recipeName, url, platform]);

  return share;
};
