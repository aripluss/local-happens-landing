import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${theme.breakpoints.lg};
  margin-inline: auto;
  padding-inline: 20px;

  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding-inline: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.lg}) {
    padding-inline: 120px;
  }
`;
