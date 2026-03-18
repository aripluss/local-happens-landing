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
  transition:
    background-color ${theme.transition},
    box-shadow ${theme.transition};

  &:hover,
  &:focus-visible {
    background-color: var(--text);
    box-shadow: var(--shadow-hover);
  }
`;

export const StyledGhostButton = styled(StyledButton)`
  background-color: white;
  color: var(--text);
  border: 1px solid var(--border);
  transition:
    border ${theme.transition},
    color ${theme.transition},
    box-shadow ${theme.transition};

  &:hover,
  &:focus-visible {
    background-color: white;
    border: 1px solid var(--muted-bg);
  }
`;
