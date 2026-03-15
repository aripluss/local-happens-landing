import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding-inline: 32px;
  padding-block: 12px;
  text-align: center;
  background-color: var(--accent);
  color: var(--bg);
  font-weight:${theme.fontWeights.medium};;
  border-radius: ${theme.radii.medium};
  transition:
    background-color ${theme.transition},

  &:hover,
  &:focus-visible {
    background-color: var(--text);
  }
`;
