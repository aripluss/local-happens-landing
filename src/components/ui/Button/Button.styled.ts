import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-inline: 32px;
  padding-block: 12px;
  background-color: var(--accent);
  color: var(--bg);
  text-align: center;
  line-height: 1.6;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.medium};
  box-shadow: var(--shadow);
  border: ${theme.borders.normal} transparent;
  transition:
    background-color ${theme.transition},
    color ${theme.transition},
    box-shadow ${theme.transition};

  &:hover,
  &:focus-visible {
    background-color: var(--hover-btn);
    box-shadow: var(--shadow-hover);
    border: ${theme.borders.normal} var(--muted-bg);
  }
`;

export const StyledGhostButton = styled(StyledButton)`
  background-color: var(--bg-bnw);
  color: var(--text);
  border: ${theme.borders.normal} var(--border);

  &:hover,
  &:focus-visible {
    background-color: var(--bg-bnw);
    border: ${theme.borders.normal} var(--muted-bg);
  }
`;
