import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledFooter = styled.footer`
  background-color: var(--bg);
  padding-block: 40px;
  border-top: 1px solid var(--border);

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

  & .motto {
    display: none;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: block;
    }
  }
`;

export const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
