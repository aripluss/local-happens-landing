import { FiDownload } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { StyledLink } from "@/components/App.styled";
import { StyledButton } from "@/components/ui/Button/Button.styled";
import logo from "@/assets/logo.png";

export const Header: React.FC = () => {
  return (
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

          <RxHamburgerMenu size={24} className="burger" />
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
