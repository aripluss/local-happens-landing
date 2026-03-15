import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid transparent;
  padding-inline: 16px;
  padding-block: 12px;
  transition:
    color ${theme.transition},
    border-bottom ${theme.transition};
  color: var(--text);

  &:hover,
  &:focus {
    color: var(--accent);
  }

  &.active {
    color: var(--accent);
    border-bottom: 2px solid var(--accent);
  }
`;
