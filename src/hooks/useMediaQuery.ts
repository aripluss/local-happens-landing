import { useState, useLayoutEffect, useEffect } from "react";
import { theme } from "@/styles/theme";

export const useWindowSize = () => {
  const breakpoint = parseInt(theme.breakpoints.md);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useLayoutEffect(() => {
    const measure = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setIsMobile(windowWidth < breakpoint);
  }, [windowWidth, breakpoint]);

  return { windowWidth, isMobile };
};
