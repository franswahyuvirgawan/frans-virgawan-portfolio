import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(media.matches);
    };

    updateMatches(); // Initial check

    const listener = () => {
      updateMatches();
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

export const useSm = (): boolean => useMediaQuery("(min-width: 640px)");
export const useIsMd = (): boolean => useMediaQuery("(min-width: 768px)");
export const useIslg = (): boolean => useMediaQuery("(min-width: 1024px)");
