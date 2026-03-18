import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { BurgerMenuModal } from "@/components";
import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { StyledLink } from "@/components/App.styled";
import { StyledButton } from "@/components/ui/Button/Button.styled";
import logo from "@/assets/logo.png";
import { theme } from "@/styles/theme";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabletBreakpoint = parseInt(theme.breakpoints.md);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= tabletBreakpoint) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [tabletBreakpoint]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <div className="logo">
            <img alt="logo" src={logo} width={48} height="auto" />
            <h2 className="logo-text">LocalHappens</h2>
          </div>

          <div className="right-content">
            <nav className="nav">
              <StyledLink href="#preview">Попередній перегляд</StyledLink>
              <StyledLink href="#how-it-works">Як це працює</StyledLink>
              <StyledLink href="#testimonials">Відгуки</StyledLink>
            </nav>

            <StyledButton
              style={{
                alignSelf: "center",
                paddingInline: "20px",
                paddingBlock: "8px",
                fontSize: "14px",
              }}
            >
              <FiDownload size={14} />
              Завантажити
            </StyledButton>

            <button className="burger-btn" onClick={toggleMenu}>
              {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </StyledHeaderContainer>
      </StyledHeader>

      <BurgerMenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
