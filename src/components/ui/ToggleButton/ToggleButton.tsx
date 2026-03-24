import { FiSun, FiMoon } from "react-icons/fi";

import { StyledToggleButton, StyledThumb } from "./ToggleButton.styled";
import { useTheme } from "@/hooks/useTheme";

type ThemeToggleProps = {
  style?: React.CSSProperties;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ style }) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <StyledToggleButton
      style={style}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <StyledThumb $isActive={isDark}>
        {isDark ? <FiMoon size={12} /> : <FiSun size={12} />}
      </StyledThumb>
    </StyledToggleButton>
  );
};
