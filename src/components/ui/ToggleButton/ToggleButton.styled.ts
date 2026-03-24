import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledToggleButton = styled.button`
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: ${theme.radii.medium};
  background: var(--border);
  border: none;
  padding: 3px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--accent-bg);
  }
`;

export const StyledThumb = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: ${theme.radii.round};
  position: absolute;
  top: 3px;
  left: ${({ $isActive }) => ($isActive ? "26px" : "3px")};
  background-color: var(--bg);
  box-shadow: ${({ $isActive }) =>
    $isActive ? "0 0 6px rgba(255,255,255,0.4)" : "none"};
  transition: all 0.3s ease;

  svg {
    color: var(--text);
  }
`;
