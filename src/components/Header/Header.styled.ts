import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-white-faint);
  padding-block: 8px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: ${theme.borders.normal} var(--border);

  & .logo {
    align-items: center;
    display: flex;
    gap: 6px;
    height: min-content;
  }

  & .logo-text {
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: block;
      font-size: ${theme.fontSizes.l};
    }
  }

  & .right-content {
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (min-width: ${theme.breakpoints.lg}) {
      gap: 32px;
    }
  }

  & .nav {
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: flex;
      justify-content: center;
      height: 100%;

      & a {
        font-size: ${theme.fontSizes.xs};
        padding-inline: clamp(12px, 1.15vw, 16px);
      }
    }
  }

  & .burger-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
