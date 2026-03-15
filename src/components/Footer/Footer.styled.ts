import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  padding-block: 40px;

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
`;

export const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
