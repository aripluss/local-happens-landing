import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;

  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding-inline: 32px;
    max-width: calc(${theme.breakpoints.lg} - 240px + 64px);
  }

  @media screen and (min-width: ${theme.breakpoints.lg}) {
    padding-inline: 120px;
    max-width: ${theme.breakpoints.lg};
  }
`;
