import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledHeader = styled.header`
  background-color: var(--bg);
  padding-block: 8px;

  & .logo {
    align-items: center;
    display: flex;
    gap: 6px;
    height: min-content;
  }

  & .logo-text {
    display: none;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: block;
      font-size: ${theme.fontSizes.l};
    }
  }

  & .right-content {
    display: flex;
    gap: 32px;
  }

  & .nav {
    display: none;

    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: flex;
      justify-content: center;
      height: 100%;
    }
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
