import styled from "styled-components";
import { theme } from "@/styles/theme";
import { StyledContainer } from "../ui/Container/Container.styled";

interface StyledBurgerMenuModalProps {
  $isOpen: boolean;
}

export const StyledBurgerMenuModal = styled.div<StyledBurgerMenuModalProps>`
  position: fixed;
  top: var(--header-height);
  right: 0;
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding-block: 80px;
  background-color: var(--bg-white-faint);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 99;
  overflow-y: auto;

  transform: translateY(
    ${(props) => (props.$isOpen ? "0" : "calc(-100% - var(--header-height))")}
  );
  transition: transform 0.3s ease;

  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledBurgerMenuContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
`;

export const StyledBurgerMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  & a {
    font-size: ${theme.fontSizes.l};
  }
`;
