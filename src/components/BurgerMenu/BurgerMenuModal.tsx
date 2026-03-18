import {
  StyledBurgerMenuModal,
  StyledBurgerMenuUl,
} from "./BurgerMenuModal.styled";
import { StyledContainer } from "../ui/Container/Container.styled";
import { StyledLink } from "../App.styled";
import { useEffect } from "react";

interface BurgerMenuModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const BurgerMenuModal: React.FC<BurgerMenuModalProps> = ({
  setIsOpen,
  isOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <StyledBurgerMenuModal $isOpen={isOpen}>
      <StyledContainer>
        <nav>
          <StyledBurgerMenuUl>
            <li>
              <StyledLink href="#preview" onClick={() => setIsOpen(false)}>
                Попередній перегляд
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#how-it-works" onClick={() => setIsOpen(false)}>
                Як це працює
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#testimonials" onClick={() => setIsOpen(false)}>
                Відгуки
              </StyledLink>
            </li>
          </StyledBurgerMenuUl>
        </nav>
      </StyledContainer>
    </StyledBurgerMenuModal>
  );
};
