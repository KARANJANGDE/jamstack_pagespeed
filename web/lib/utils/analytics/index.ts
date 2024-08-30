import { NEXT_PUBLIC_GTM_ID } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
const DEFAULT_GTAG_DELAY = 10000; // 10 seconds
export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const init = () => {
    if (isInitialized) return;
    TagManager.initialize({
      gtmId: NEXT_PUBLIC_GTM_ID,
    });
    ReactGA.initialize(NEXT_PUBLIC_GTM_ID);
    removeListeners();
    setIsInitialized(true);
  };
  const removeListeners = () => {
    document.removeEventListener("scroll", init);
    document.removeEventListener("touchstart", init);
    document.removeEventListener("click", init);
  };
  const timeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    document.addEventListener("scroll", init);
    document.addEventListener("touchstart", init);
    document.addEventListener("click", init);
    timeout.current = setTimeout(() => {
      init();
      removeListeners();
    }, DEFAULT_GTAG_DELAY);
    return () => {
      clearTimeout(timeout.current);
      removeListeners();
    };
  }, []);
  return {
    ReactGA,
    isInitialized,
    timeout,
  };
};
